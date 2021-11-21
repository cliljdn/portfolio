const ENV = process.env

export const SERVER_PORT = Number(ENV.APP_PORT) || 4040

// DATABASE
export const DB_HOST = String(ENV.DB_HOST)
export const DB_USER = String(ENV.DB_USER)
export const DB_PASS = String(ENV.DB_PASS)
export const DB_NAME = String(ENV.DB_NAME)
export const MIGRATION_PATH = String(ENV.MIGRATION_PATH)
export const SEED_PATH = String(ENV.SEED_PATH)
