const tasksModel = require('../models/tasksModel')

const getAll = async (request, response) => {

    response.status(200).json({ mesagen: 'Bem vindo' })
    // const tasks = await tasksModel.getAll();

    return response.status(200).json([tasks])
};

module.exports = {
    getAll
};