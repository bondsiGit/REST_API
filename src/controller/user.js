const userModel = require('../models/user')

const getAllUser = async (req, res) => {
    try {
        const [data] = await userModel.getAllUser();
        
        res.json({
            message: 'GET all user done...',
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error..',
            serverMessage: error,
        })
    }
}

const createUsers = async (req, res) => {
    console.log(req.body)
    const {body} = req;
    try {
        await userModel.createNewUser(body)
        res.json({
            message: 'CREATE user done...',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error..',
            serverMessage: error,
        })
    }
}

const updateUsers = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await userModel.updateUser(body, idUser);
        res.json({
            message: 'UPDATE is done...',
            data: {
                id: idUser,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error..',
            serverMessage: error,
        })

    }
}

const deleteUser = (req, res) => {
    const {id} =req.params;
    res.json({
        message: 'DELETE is done...',
        data: {
            "name" : "sitit",
            "email" : "sitii@gmail.com"
        }
    })
}
module.exports = {
    getAllUser,
    createUsers,
    updateUsers,
    deleteUser
}