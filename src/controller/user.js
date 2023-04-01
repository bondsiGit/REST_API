const getAllUser = (req, res) => {
    const data = {
        "id" : '1',
        "name" : "Sigit P",
        "email" : "sigit@hmail.com"
    }
    
    res.json({
        message: 'GET all user done...',
        data : data
    })
}

const createUsers = (req, res) => {
    console.log(req.body)
    res.json({
        message: 'CREATE user done...',
        data: req.body
    })
}

const updateUsers = (req, res) => {
    const {id} = req.params;
    console.log("id", id);
    res.json({
        message: 'UPDATE is done...',
        data: req.body
    })
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