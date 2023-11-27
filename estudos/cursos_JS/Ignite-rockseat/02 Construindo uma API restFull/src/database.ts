import { knex, Knex } from 'knex'
import { env } from './env'

export const configConnection: Knex.Config = {
	client: 'sqlite3',
	connection: {
		filename: env.DATABASE_URL,
	},
	useNullAsDefault: true,
	migrations: {
		extension: 'ts',
		directory: './src/dataBase/migrations'
	}
}

export const connectKnex =  knex(configConnection)