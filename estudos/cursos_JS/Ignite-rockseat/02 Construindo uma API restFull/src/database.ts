import { knex, Knex } from 'knex'

export const configConnection: Knex.Config = {
	client: 'sqlite3',
	connection: {
		filename: './src/dataBase/app.db',
	},
	useNullAsDefault: true,
	migrations: {
		extension: 'ts',
		directory: './src/dataBase/migrations'
	}
}

export const connectKnex =  knex(configConnection)