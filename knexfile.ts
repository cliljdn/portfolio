import e from 'dotenv'
e.config()
import {
    DB_HOST,
    DB_NAME,
    DB_USER,
    MIGRATION_PATH,
    SEED_PATH,
} from './src/constants/env.constants'

// Update with your config settings.
export default {
    development: {
        client: 'mysql',
        connection: {
            host: DB_HOST,
            database: DB_NAME,
            user: DB_USER,
            pass: '',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: MIGRATION_PATH,
        },
        seeds: {
            directory: SEED_PATH,
        },
    },

    staging: {
        client: 'mysql2',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },

    production: {
        client: 'mysql2',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
}
