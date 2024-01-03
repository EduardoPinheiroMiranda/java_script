import { knex as setupKnex } from "knex"

export const configuracaoDeConeccao = {
	cliente: "sqlite",
	connection: {
		filename: "./src/database/bancoDeDados/colorCollection.db"
	},
	useNullAsDefault: true,
	migrations: {
		extension: "ts",
		directory: "./src/database/migrations"
	}
    
}
export const knex = setupKnex(configuracaoDeConeccao)