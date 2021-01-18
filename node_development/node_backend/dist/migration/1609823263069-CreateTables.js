"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTables1609823263069 = void 0;
class CreateTables1609823263069 {
    constructor() {
        this.name = 'CreateTables1609823263069';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" 
        ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1),
        "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
        "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "username" varchar(255) NOT NULL,
        "name" varchar(255) NOT NULL, "phoneNumber" varchar(255) NOT NULL, 
        "password" varchar(255) NOT NULL, "acceptedCommercial" integer DEFAULT (1),
        "acceptedTerms" integer DEFAULT (1), "role" integer NOT NULL DEFAULT (0))`);
        await queryRunner.query(`CREATE TABLE "event" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
        "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
        "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "eventName" varchar(255) NOT NULL, 
        "startDate" varchar, "endDate" varchar, "location" varchar(255) NOT NULL, 
        "description" varchar(255) NOT NULL, "attentionTime" varchar NOT NULL,
        "visitorCount" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "queue_detail"(
        "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), 
        "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
        "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
        "queueNumber" VARCHAR(255),
        "minEstimatedTime" VARCHAR(255), 
        idUser BIGINT, idEvent BIGINT,
        FOREIGN KEY(idUser) REFERENCES user(id), 
        FOREIGN KEY(idEvent) REFERENCES event(id))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "queue_detail"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.CreateTables1609823263069 = CreateTables1609823263069;
//# sourceMappingURL=1609823263069-CreateTables.js.map