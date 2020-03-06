const CoreModel = require('./coreModel');

class Question extends CoreModel {

    id;
    label;
    anecdote;
    wiki;
    created_at;
    updated_at;

    constructor(objQuestion) {
        //this.id = objQuestion.id;
        this.label = objQuestion.label;
        this.anecdote = objQuestion.anecdote;
        this.wiki = objQuestion.wiki;
        //this.created_at = objQuestion.created_at;
        //this.updated_at = objQuestion.updated_at;
    };

    setLabel(label) {
        this.label = label;
    };
    getLabel(){
        return this.label;
    };

    setAnecdote(anecdote) {
        this.anecdote = anecdote;
    };
    getAnecdote(){
        return this.anecdote;
    };

    setWiki(wiki) {
        this.wiki = wiki;
    };
    getWiki(){
        return this.wiki;
    };
};

module.exports = Question;