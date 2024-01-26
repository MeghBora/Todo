const Todo = require("../Model/todo");

const createTodo = async (req, res) => {
        try {
                const { title, description, priority } = req.body;
                if (!title || !priority) {
                        return res.status(400).json({ message: 'Please enter priority and Title at least' });
                }

                const todo = new Todo({
                        title,
                        description,
                        user: req.user,
                        priority,
                })

                await todo.save();

                res.status(201).json({
                        created: todo,
                        sucess: true,
                });

        } catch (err) {
                console.log("oops error", err);
                res.status(500).json({ message: "This is unexpected, we ran into an error" })
        }

}

const getAllTodo = async (req, res) => {
        try {
                const allTodos = await Todo.find();
                res.status(200).json({ message: allTodos });
        } catch (err) {
                console.log('error', err);
                res.status(500).json({ message: "This is unexpected, we ran into an error" })
        }
}

const updateTodo = async (req, res) => {
        try {
                const { id } = req.params;
                const todo = await Todo.find({ _id: id });
                const { title, description, priority } = req.body;
                if (!title && !description && !priority) {
                        return;
                }
                await Todo.findOneAndUpdate({ _id: id }, {
                        title: title || todo.title,
                        description: description || todo.description,
                        priority: description || todo.description
                })

                res.status(200).json({ message: "update sucessfully", success: 'true' })

        } catch (err) {
                console.log('error', err);
                res.status(500).json({ message: "This is unexpected, we ran into an error" })
        }
}

const deleteTodo = async (req, res) => {
        try {
                const { id } = req.params;
                await Todo.findOne({ _id: id }).remove();
        } catch (err) {
                console.log('error', err);
                res.status(500).json({ message: "This is unexpected, we ran into an error" })
        }
}

module.exports = { createTodo, getAllTodo, updateTodo, deleteTodo }