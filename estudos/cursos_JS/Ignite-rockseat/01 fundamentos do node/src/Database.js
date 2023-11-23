import fs from "node:fs/promises"

const databasePath = new URL("../db.json", import.meta.url)

export class DataBase{
    #dataBase= {}

    constructor(){
        fs.readFile(databasePath, "utf8").then(data=>{
            this.#dataBase = JSON.parse(data)
        })
        .catch(() => {
            this.#presit()
        })
    }

    #presit(){
        fs.writeFile(databasePath, JSON.stringify(this.#dataBase))

    }

    select(table){
        const data  = this.#dataBase[table] ?? []
        return data
    }

    insert(table, data){
        if(Array.isArray(this.#dataBase[table])){
            this.#dataBase[table].push(data)
        }else{
            this.#dataBase[table] = [data]
        }

        this.#presit()

        return data
    }
}