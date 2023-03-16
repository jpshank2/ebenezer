const fs = require('fs');
let entities

if(fs.existsSync('entities.json')) {
    entities = JSON.parse(fs.readFileSync('entities.json'));
} else {
    entities = { nextid: 0 }
}

let getEntities = () => {
    return Object.assign({}, entities); //create a copy and return it
}

let getEntity = id => {
    return Object.assign({}, entities[id]); //create a copy and return it
}

let createEntity = (entity) => {
    entities[entities.nextid++] = entity;
    writeEntities();
};

let updateEntity = (id, entity) => {
    entities[id] = entity;
    writeEntities();
}

let deleteEntity = id => {
    delete entities[id];
    writeEntities();
}

let writeEntities = () => {
    fs.writeFileSync('entities.json', JSON.stringify(entities));
};

module.exports = {
    GetEntities: getEntities,
    GetEntity: getEntity,
    CreateEntity: createEntity,
    UpdateEntity: updateEntity,
    DeleteEntity: deleteEntity
}