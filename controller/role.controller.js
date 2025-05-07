const Role = require('../model/role.schema.js');

const getAll = (req, res, next) => {
    try {
        let result = Role.findAll();
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json({ error: "Erreur lors de la récupération des rôles" });
    }
}

const getById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: "ID invalide" });
        }
        
        let result = await Role.findOne({
            where: {
                id: id
            }
        });
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json({ error: "Erreur lors de la récupération du rôle" });
    }
}

const create = async (req, res, next) => {
    try {
        if (!req.body.name || typeof req.body.name !== 'string') {
            return res.status(400).json({ error: "Le nom est requis" });
        }
        
        let result = await Role.create({
            name: req.body.name
        });
        res.status(201).json(result);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const update = (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: "ID invalide" });
        }
        const safeData = { 
            name: req.body.name 
        };
        
        let result = Role.updateOne(safeData, { id: id });
        res.status(201).json(result);
    } catch (e) {
        res.status(500).json({ error: "Erreur lors de la mise à jour du rôle" });
    }
}

const remove = (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: "ID invalide" });
        }
        
        let result = Role.remove(id);
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json({ error: "Erreur lors de la suppression du rôle" });
    }
}

module.exports = { getAll, create, getById, update, remove};