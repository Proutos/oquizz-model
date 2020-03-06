class CoreModel {

    id;
    created_at;
    updated_at;

    constructor(objCoreModel) {
        this.id = objCoreModel.id;
        this.created_at = objCoreModel.created_at;
        this.updated_at = objCoreModel.updated_at;
    };

    setId(id) {
        if( typeof value !== 'number') {
            throw Error("CoreModel.id must be a number !");
        }
        this.id = id;
    };
    getId(){
        return this.id;
    };

    setCreated_at(date){
        if( typeof value !== 'date') {
            throw Error("CoreModel.created_at must be a date !");
        }
        this.created_at = date;
    };
    getCreated_at(){
        return this.created_at;
    };

    setUpdated_at(date){
        if( typeof value !== 'date') {
            throw Error("CoreModel.updated_at must be a date !");
        }
        this.updated_at = date;
    };
    getUpdated_at(){
        return this.updated_at;
    };


};

module.exports = CoreModel;