const Task = require("../model/task")

const apresentar = async (req,res) => {
    try{
        const tasklist = await Task.find()
        return res.render("indexV", {tasklist, taskdelete:null, task:null})
    } catch(err){
        res.status(500).send({error: err.message})
    }
}

const criarPost = async (req,res) =>{
    const task = req.body
    if(!task.nome){
        return res.redirect("/")
    }

    try{
        await Task.create(task)
        return res.redirect("/")
    } catch(err){
        res.status(500).send({error: err.message})
    }
}

const getById = async (req, res) => {
    try{
        const tasklist = await Task.find()
            if(req.params.method == "update"){
                const task = await Task.findOne({_id: req.params.id})
                res.render('indexV', {task, taskdelete:null, tasklist})
            }else{
                const taskdelete  = await Task.findOne({_id: req.params.id})
                res.render('indexV', {task:null, taskdelete, tasklist})
            }
    }catch (err){
        res.status(500).send({error: err.message})
    }
}

const update = async (req,res) => {
    try{
        const task = req.body
        await Task.updateOne({_id: req.params.id}, task)
        res.redirect("/")
    }catch(err){
        res.status(500).send({error: err.message})
    }
}

const delet = async(req,res) => {
        try{
            await Task.deleteOne({_id: req.params.id})
            res.redirect("/")
        }catch(err){
            res.status(500).send({error: err.message})
        }
}

module.exports = {
    apresentar,
    criarPost,
    getById,
    update,
    delet

}