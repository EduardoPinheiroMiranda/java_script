import knex, { Knex } from "knex"

export const configuracaoDeConeccao: Knex.Config = {
	client: "sqlite",
	connection: {
		filename: "./src/dataBase/BaseDeDados/color_collection.db"
	},
	useNullAsDefault: true,
	migrations:{
		extension: "ts",
		directory: "./src/dataBase/Migrations"
	}
}

export const coneccaoDoBanco = knex(configuracaoDeConeccao)