import knex,{ Knex} from 'knex'



export const config: Knex.Config = { 
	client: 'sqlite',
	connection: {
		filename: './src/database/dbApp.db'
	},
	useNullAsDefault: true,
	migrations: {
		extension: 'ts',
		directory: './src/database/magrations'
	}
}

export const knexConnection = knex(config)