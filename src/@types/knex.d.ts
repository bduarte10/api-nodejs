/* eslint-disable @typescript-eslint/no-unused-vars */
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      description: string
      created_at: string
      session_id?: string
    }
  }
}
