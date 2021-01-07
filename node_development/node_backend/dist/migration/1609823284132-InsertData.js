"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertData1609823284132 = void 0;
const bcrypt_1 = require("bcrypt");
const roles_enum_1 = require("../app/core/auth/model/roles.enum");
class InsertData1609823284132 {
    constructor() {
        this.name = 'InsertData1609823284132';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO USER(id, username,name,phoneNumber,password,acceptedCommercial,acceptedTerms,role) VALUES(?, ?, ?, ?,?,?,?,?);`, [
            1,
            'user',
            'user',
            '1212121212',
            await bcrypt_1.hash('password', await bcrypt_1.genSalt(12)),
            1,
            1,
            roles_enum_1.roles.USER,
        ]);
        await queryRunner.query(`INSERT INTO USER(id, username,name,phoneNumber,password,acceptedCommercial,acceptedTerms,role) VALUES(?, ?, ?, ?,?,?,?,?);`, [
            3,
            'azhar@gmail.com',
            'Azhar',
            '8734231265',
            await bcrypt_1.hash('Azhar@123', await bcrypt_1.genSalt(12)),
            1,
            1,
            roles_enum_1.roles.USER,
        ]);
        await queryRunner.query(`INSERT INTO USER(id, username,name,phoneNumber,password,acceptedCommercial,acceptedTerms,role) VALUES(?, ?, ?, ?,?,?,?,?);`, [
            4,
            'ayushi@gmail.com',
            'Ayushi',
            '7837263134',
            await bcrypt_1.hash('Ayushi@123', await bcrypt_1.genSalt(12)),
            1,
            1,
            roles_enum_1.roles.USER,
        ]);
        await queryRunner.query(`INSERT INTO USER(id, username,name,phoneNumber,password,acceptedCommercial,acceptedTerms,role) VALUES(?, ?, ?, ?,?,?,?,?);`, [
            2,
            'admin',
            'admin',
            '9898989898',
            await bcrypt_1.hash('admin', await bcrypt_1.genSalt(12)),
            1,
            1,
            roles_enum_1.roles.ADMIN,
        ]);
        await queryRunner.query(`INSERT INTO EVENT(id,eventName,startDate,endDate, location, description,attentionTime,visitorCount) VALUES (1,'Rebecca','27-12-2020',null,'kolkata','Cultural Event','5 minutes',0);`);
        await queryRunner.query(`INSERT INTO EVENT(id,eventName,startDate,endDate, location, description,attentionTime,visitorCount) VALUES (2,'Reflexobeta','28-12-2020',null,'Bangalore','Dancing Event','5 minutes',0);`);
        await queryRunner.query(`INSERT INTO EVENT(id,eventName,startDate,endDate, location, description,attentionTime,visitorCount) VALUES (3,'Orkotan','29-12-2020',null,'Mumbai','Musical Event','5 minutes',0);`);
        await queryRunner.query(`INSERT INTO QUEUE_DETAIL(id,queueNumber,minEstimatedTime,creationTime,userId, eventId) VALUES (1,'Q001','10 minutes',datetime('now'),3,1);`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "queue_detail" RENAME TO "temporary_queue_detail"`);
        await queryRunner.query(`CREATE TABLE "queue_detail" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "queueNumber" varchar(255) NOT NULL, "minEstimatedTime" varchar(255) NOT NULL, "creationTime" varchar(255), "user_id" integer, "eventId" integer)`);
        await queryRunner.query(`INSERT INTO "queue_detail"("id", "version", "createdAt", "updatedAt", "queueNumber", "minEstimatedTime", "creationTime", "user_id", "eventId") SELECT "id", "version", "createdAt", "updatedAt", "queueNumber", "minEstimatedTime", "creationTime", "user_id", "eventId" FROM "temporary_queue_detail"`);
        await queryRunner.query(`DROP TABLE "temporary_queue_detail"`);
        await queryRunner.query(`DROP TABLE "queue_detail"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.InsertData1609823284132 = InsertData1609823284132;
//# sourceMappingURL=1609823284132-InsertData.js.map