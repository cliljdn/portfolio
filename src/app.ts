import dotenv from 'dotenv'
dotenv.config()

import e from 'express'
import { SERVER_PORT } from './constants/env.constants'
import appConfig from './config/express'

import knexConfig from '../knexfile'
import Knex from 'knex'
import { Model } from 'objection'

const app: e.Application = e()

// CONFIGS
appConfig(app)

const knex = Knex(knexConfig.development)
Model.knex(knex)

// LOADS PROMISE MODULES
;(() => {
    console.log(1)
})()

app.listen(SERVER_PORT, () =>
    console.log(`Server is Running on Port: ${SERVER_PORT}`)
)
