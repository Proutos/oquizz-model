const CoreModel = require('./coreModel');

class Level extends CoreModel {
    
    id;
    name;
    created_at;
    updated_at;

    constructor(objLevel) {
        //this.id = objLevel.id;
        this.name = objLevel.name;
        //this.created_at = objLevel.created_at;
        //this.updated_at = objLevel.updated_at;
    };

    setName(name) {
        this.name = name;
    };
    getName(){
        return this.name;
    };
};

module.exports = Level;