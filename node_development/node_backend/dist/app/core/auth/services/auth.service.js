"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const class_transformer_1 = require("class-transformer");
const user_service_1 = require("../../user/services/user.service");
let AuthService = class AuthService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async validateUser(username, pass) {
        const user = await this.usersService.findOne(username);
        if (user && (await bcrypt_1.compare(pass, user.password))) {
            return class_transformer_1.classToPlain(user);
        }
        return undefined;
    }
    async login(user) {
        const payload = await this.validateUser(user.username, user.password);
        if (!payload) {
            throw new common_1.UnauthorizedException('Wrong username or password');
        }
        return payload;
    }
    register(user) {
        return this.usersService.registerUser(user);
    }
    getUsers() {
        return this.usersService.getUsers();
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map