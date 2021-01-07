"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const def = {
    isDev: false,
    host: 'localhost',
    port: 3000,
    clientUrl: 'localhost:4200',
    globalPrefix: 'v1',
    loggerConfig: {
        console: true,
        errorLogFile: './logs/error.log',
        generalLogFile: './logs/general.log',
        loggerLevel: 'info',
    },
    database: {
        type: 'sqlite',
        database: ':memory:',
        synchronize: false,
        migrationsRun: true,
        logging: true,
        entities: ['dist/**/*.entity.js'],
        migrations: ['dist/migration/**/*.js'],
        subscribers: ['dist/subscriber/**/*.js'],
        cli: {
            entitiesDir: 'src/entity',
            migrationsDir: 'src/migration',
            subscribersDir: 'src/subscriber',
        },
    },
    swaggerConfig: {
        swaggerTitle: 'NestJS Application',
        swaggerDescription: 'API Documentation',
        swaggerVersion: '0.0.1',
    },
    jwtConfig: { secret: 'SECRET', signOptions: { expiresIn: '24h' } },
};
exports.default = def;
//# sourceMappingURL=develop.js.map