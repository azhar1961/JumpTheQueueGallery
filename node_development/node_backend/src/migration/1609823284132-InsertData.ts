import { hash, genSalt } from 'bcrypt';
import { MigrationInterface, QueryRunner } from "typeorm";
import { roles } from '../app/core/auth/model/roles.enum';

export class InsertData1609823284132 implements MigrationInterface {
    name = 'InsertData1609823284132'

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`INSERT INTO USER(id, username,name,phoneNumber,password,acceptedCommercial,acceptedTerms,role) VALUES(?, ?, ?, ?,?,?,?,?);`, [
            1,
            'user',
            'user',
            '1212121212',
            await hash('password', await genSalt(12)),
            1,
            1,
            roles.USER,
        ]);
        await queryRunner.query(`INSERT INTO USER(id, username,name,phoneNumber,password,acceptedCommercial,acceptedTerms,role) VALUES(?, ?, ?, ?,?,?,?,?);`, [
            3,
            'azhar@gmail.com',
            'Azhar',
            '8734231265',
            await hash('Azhar@123', await genSalt(12)),
            1,
            1,
            roles.USER,
        ]);
        await queryRunner.query(`INSERT INTO USER(id, username,name,phoneNumber,password,acceptedCommercial,acceptedTerms,role) VALUES(?, ?, ?, ?,?,?,?,?);`, [
            4,
            'ayushi@gmail.com',
            'Ayushi',
            '7837263134',
            await hash('Ayushi@123', await genSalt(12)),
            1,
            1,
            roles.USER,
        ]);
        await queryRunner.query(`INSERT INTO USER(id, username,name,phoneNumber,password,acceptedCommercial,acceptedTerms,role) VALUES(?, ?, ?, ?,?,?,?,?);`, [
            2,
            'admin',
            'admin',
            '9898989898',
            await hash('admin', await genSalt(12)),
            1,
            1,
            roles.ADMIN,
        ]);


        await queryRunner.query(
            `INSERT INTO EVENT(id,eventName,startDate,endDate, location, description,attentionTime,visitorCount) VALUES (1,'Rebecca','27-12-2020',null,'kolkata','Cultural Event','5 minutes',0);`,

        );
        await queryRunner.query(
            `INSERT INTO EVENT(id,eventName,startDate,endDate, location, description,attentionTime,visitorCount) VALUES (2,'Reflexobeta','28-12-2020',null,'Bangalore','Dancing Event','5 minutes',0);`,

        );
        await queryRunner.query(
            `INSERT INTO EVENT(id,eventName,startDate,endDate, location, description,attentionTime,visitorCount) VALUES (3,'Orkotan','29-12-2020',null,'Mumbai','Musical Event','5 minutes',0);`,

        );

        await queryRunner.query(
            `INSERT INTO QUEUE_DETAIL(id,queueNumber,minEstimatedTime,creationTime,userId, eventId) VALUES (1,'Q001','10 minutes',datetime('now'),3,1);`,

        );

        // await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "username" varchar(255) NOT NULL, "name" varchar(255) NOT NULL, "phoneNumber" varchar(255) NOT NULL, "password" varchar(255) NOT NULL, "acceptedCommercial" integer DEFAULT (1), "acceptedTerms" integer DEFAULT (1), "role" integer NOT NULL DEFAULT (0))`);
        // await queryRunner.query(`CREATE TABLE "event" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "eventName" varchar(255) NOT NULL, "startDate" varchar, "endDate" varchar, "location" varchar(255) NOT NULL, "description" varchar(255) NOT NULL, "attentionTime" varchar NOT NULL, "visitorCount" integer NOT NULL)`);
        // await queryRunner.query(`CREATE TABLE "queue_detail" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "queueNumber" varchar(255) NOT NULL, "minEstimatedTime" varchar(255) NOT NULL, "creationTime" varchar(255), "user_id" integer, "eventId" integer)`);
        // await queryRunner.query(`CREATE TABLE "temporary_queue_detail" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "queueNumber" varchar(255) NOT NULL, "minEstimatedTime" varchar(255) NOT NULL, "creationTime" varchar(255), "user_id" integer, "eventId" integer, CONSTRAINT "FK_58015da3a20b259bcd8f03441b0" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_377d87f85bd7be5d6859cc8b24a" FOREIGN KEY ("eventId") REFERENCES "event" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        // await queryRunner.query(`INSERT INTO "temporary_queue_detail"("id", "version", "createdAt", "updatedAt", "queueNumber", "minEstimatedTime", "creationTime", "user_id", "eventId") SELECT "id", "version", "createdAt", "updatedAt", "queueNumber", "minEstimatedTime", "creationTime", "user_id", "eventId" FROM "queue_detail"`);
        // await queryRunner.query(`DROP TABLE "queue_detail"`);
        // await queryRunner.query(`ALTER TABLE "temporary_queue_detail" RENAME TO "queue_detail"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "queue_detail" RENAME TO "temporary_queue_detail"`);
        await queryRunner.query(`CREATE TABLE "queue_detail" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "queueNumber" varchar(255) NOT NULL, "minEstimatedTime" varchar(255) NOT NULL, "creationTime" varchar(255), "user_id" integer, "eventId" integer)`);
        await queryRunner.query(`INSERT INTO "queue_detail"("id", "version", "createdAt", "updatedAt", "queueNumber", "minEstimatedTime", "creationTime", "user_id", "eventId") SELECT "id", "version", "createdAt", "updatedAt", "queueNumber", "minEstimatedTime", "creationTime", "user_id", "eventId" FROM "temporary_queue_detail"`);
        await queryRunner.query(`DROP TABLE "temporary_queue_detail"`);
        await queryRunner.query(`DROP TABLE "queue_detail"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
