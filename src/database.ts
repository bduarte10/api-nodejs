import { env } from './env'
import { knex as setupKnex, Knex } from 'knex'

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === 'sqlite'
      ? {
          filename:
            process.env.NODE_ENV === 'test'
              ? env.DATABASE_TEST_URL
              : env.DATABASE_URL,
        }
      : env.DATABASE_URL,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}
console.log(config)
export const knex = setupKnex(config)
