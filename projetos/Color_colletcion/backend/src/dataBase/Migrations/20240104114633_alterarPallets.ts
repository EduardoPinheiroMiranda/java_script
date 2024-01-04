import type { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
	await knex.schema.alterTable("pallets", (table) => {
		table.text("colors").notNullable()
	})
}


export async function down(knex: Knex): Promise<void> {
	await knex.schema.alterTable("pallets", (table) => {
		table.dropColumn("colors")
	})
}

