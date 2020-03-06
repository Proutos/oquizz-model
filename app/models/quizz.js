const CoreModel = require('./coreModel');

class Quizz extends CoreModel {

    id;
    title;
    description;
    created_at;
    updated_at;

    constructor(objQuizz) {
        //this.id = objQuizz.id;
        this.title = objQuizz.title;
        this.description = objQuizz.description;
        //this.created_at = objQuizz.created_at;
        //this.updated_at = objQuizz.updated_at;
    };

    setTitle(title) {
        this.title = title;
    };
    getTitle(){
        return this.title;
    };

    setDescription(description) {
        this.description = description;
    };
    getDescription(){
        return this.description;
    };
};

module.exports = Quizz;