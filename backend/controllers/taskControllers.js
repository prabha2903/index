const Task = require('../models/Task');

// CREATE TASK
exports.createTask = async (req, res) => {
    try {
        const task = await Task.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status || 'pending',
            userId: req.user.id   // ✅ take from JWT, NOT req.body
        });

        res.status(201).json({
            message: 'Task created successfully'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET ALL TASKS OF LOGGED-IN USER
exports.getTask = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET SINGLE TASK BY ID
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            userId: req.user.id
        });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateTask=async(req,res)=>{
    try{
        const task=await Task.findOneAndUpdate({
            _id: req.params.id,
            userId:req.user.id,
        },{
         title:req.body.title,
         description:req.body.description,
         status:req.body.status
        },
    {new:true})
    if(!task){
        res.json({msg:"task not found"})
    }
        res.json(task)
    }catch(error){
        res.json(error)
    }
}

exports.updateTaskPatch=async(req,res)=>{
    try{
        const task=await Task.findOneAndUpdate({
            _id: req.params.id,
            user:req.user.id,
        },
         req.body,
    {new:true})
    if(!task){
        res.json({msg:"task not found"})
    }
        res.json(task)
    }catch(error){
        res.json(error)
    }
}

exports.deleteTask=async(req,res)=>{
    try{
        const task=await Task.findOneAndDelete({
            _id:req.params.id,
            user:req.user.id
        })
        res.json(task)
    }catch(error){
        res.json(error)
    }
}