const getAllUser = (req, res) => {
    res.json({
        message: 'GET all user done...'
    })
}

const createUsers = (req, res) => {
    res.json({
        message: 'CREATE user done...'
    })
}

module.exports = {
    getAllUser,
    createUsers
}