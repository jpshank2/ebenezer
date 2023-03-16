const express = require('express');
const EntStore = require('./entStore.js');
const router = express.Router();

router.get("/:id?", (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(EntStore.GetEntity(id))
    } else {
        res.json(EntStore.GetEntities());
    }
});

router.post("/", (req, res) => {
    EntStore.CreateEntity(req.body);
    res.sendStatus(200);
});

router.put("/:id", (req, res) => {
    try {
        let id = req.params.id;
        EntStore.UpdateEntity(id, req.body);
        res.sendStatus(200);
    } catch(err) {
        res.send(err).sendStatus(500)
    }
    
});

router.delete("/:id", (req, res) => {
    let id = req.params.id;
    EntStore.DeleteEntity(id);
    res.sendStatus(200);
});

module.exports = router;