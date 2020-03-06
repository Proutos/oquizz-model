const CoreModel = require('./coreModel');

class Tag extends CoreModel {

    id;
    name;
    created_at;
    updated_at;

    constructor(objTag) {
        //this.id = objTag.id;
        this.name = objTag.name;
        //this.created_at = objTag.created_at;
        //this.updated_at = objTag.updated_at;
    };

    setName(name) {
        this.name = name;
    };
    getName(){
        return this.name;
    };
};

module.exports = Tag;