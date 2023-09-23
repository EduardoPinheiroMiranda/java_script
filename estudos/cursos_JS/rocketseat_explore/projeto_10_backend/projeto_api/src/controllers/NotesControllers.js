const knex = require("../database/knex")

class NotesControllers{

    async create(req, res){

        const {title, description, tags, links} = req.body
        const {user_id} = req.params

        const Note_id = await knex("notes").insert({
            title, 
            description,
            user_id
        })

        const note_id = Note_id[0]

        const linksInsert = links.map(link => {
            return {
                note_id, 
                url:link
            }
        })

        await knex("links").insert(linksInsert)

        const tagsInsert = tags.map(name => {
            return {
                note_id,
                user_id,
                name
            }
        })

        await knex("tags").insert(tagsInsert)

        return res.json()

    }

    async show(req, res){
        const {id} = req.params

        const note = await knex("notes").where({id}).first()
        const tags = await knex("tags").where({note_id : id}).orderBy("name")
        const links = await knex("links").where({note_id : id}).orderBy("create_at")

        return res.json({
            ...note,
            tags,
            links
        })

    }

    async delete(req, res){
        const {id} = req.params

        await knex("notes").where({id}).delete()

        return res.json()
        
    }

    async showNotesUser(req, res){
        const {title, user_id, tag} = req.query

        let notesUser

        if(tag){
            const filterTag = tag.split(",").map(tag => tag.trim())

            notesUser = await knex("tags")
            .select([
                "notes.id",
                "notes.title",
                "notes.user_id"
            ])
            .where("notes.user_id", user_id)
            .whereLike(`notes.title`, `%${title}%`)
            .whereIn("name", filterTag)
            .innerJoin("notes", "notes.id", "tags.note_id")
            .orderBy("title")
        }else{
            notesUser = await knex("notes")
            .where({user_id})
            .whereLike(`title`, `%${title}%`)        
            .orderBy("title")
        }

        const userTag = await knex("tags").where({user_id})
        const noteWithTag = notesUser.map(notes => {
              const noteTag = userTag.filter(tag => tag.note_id === notes.id)
            
            return {
                ...notes,
                tags: noteTag
            }
        })
        

        

        return res.json({noteWithTag})
    }
}

module.exports = NotesControllers