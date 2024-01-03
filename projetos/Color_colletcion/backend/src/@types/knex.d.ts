// eslint-disable-next-line
import { knex } from "knex"

declare module "knex/types/tables" {
    export interface Tables {
        users:{
            idUser: string,
            name: string,
            email: string,
            password: string,
            avatar?: string,
        }

        pallets: {
            idPallet: string,
            name: string,
            category: string,
            favorite: string,
            foreignKey_IdUser: string,
        }
    }
}