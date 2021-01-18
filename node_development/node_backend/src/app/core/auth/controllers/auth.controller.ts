import { BadRequestException, Body, Controller, Get, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../user/model/entities/user.entity';
import { AuthService } from '../services/auth.service';
import { GetUser } from '../decorators/get-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Post('login')
  @HttpCode(200)
  async login(@Body() user: User): Promise<User> {
    // const login = await this.authService.login(user);
    // return login;
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() user: User): Promise<User> {
    try {
      const registered = await this.authService.register(user);
      return registered;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get('users')
  async getUsers(): Promise<[User[], number]> {
    return await this.authService.getUsers();
  }

  @Get('currentuser')
  @UseGuards(AuthGuard())
  currentUser(@GetUser() user: User): User {
    return user;
  }
}
