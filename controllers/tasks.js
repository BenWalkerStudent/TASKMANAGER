
const getAllTasks = (req, res) => {

    res.send('get all tasks')

}

const createTask = (req, res) => {

    res.json(req.body)

}

const getTask = (req, res) => {

    res.json({ id: req.params.id })

}

const editTask = (req, res) => {

    res.send('edit task')

}

const deleteTask = (req, res) => {

    res.send('delete task')

}



module.exports = {

    getAllTasks,
    createTask,
    getTask,
    editTask,
    deleteTask


}