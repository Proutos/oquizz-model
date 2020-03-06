const CoreModel = require('./coreModel');

class Answer extends CoreModel {

    id;
    label;
    is_right;
    created_at;
    updated_at;

    constructor(objAnswer) {
        //this.id = objAnswer.id;
        this.label = objAnswer.label;
        this.is_right = objAnswer.is_right;
        //this.created_at = objAnswer.created_at;
        //this.updated_at = objAnswer.updated_at;
    };

    setLabel(label) {
        this.label = label;
    };
    getLabel(){
        return this.label;
    };

    setIs_right(is_right) {
        this.is_right = is_right;
    };
    getIs_right(){
        return this.is_right;
    };
};

module.exports = Answer;