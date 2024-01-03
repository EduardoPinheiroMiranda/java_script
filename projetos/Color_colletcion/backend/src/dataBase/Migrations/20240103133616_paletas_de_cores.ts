import type { Knex } from "knex"


export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("pallets", (table) => {
		table.uuid("idPallet").primary(),
		table.text("name").notNullable(),
		table.text("category").notNullable(),
		table.text("favorite").notNullable(),
		table.text("foreignKey_idUser").notNullable()
		table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable()
	})
}


export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("pallets")
}

