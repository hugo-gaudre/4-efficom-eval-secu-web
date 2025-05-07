const Message = require('../model/role.schema.js');

const getAll = (req, res, next) => {
    try {
        let result = Role.findAll();
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}


const getById = async (req, res, next) => {
    try {
        let result = await Message.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
}

const create = async (req, res, next) => {
    try {
        let result = await Message.create({
            name: req.body.name
        });
        res.status(201).json(result);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const update = (req, res, next) => {
    try {
        let result = Message.updateOne(req.body, { id: req.params.id });
        res.status(201).json(result);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

const remove = (req, res, next) => {
    try {
        let result = Message.remove(req.params.id);
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

module.exports = { getAll, create, getById, update, remove };