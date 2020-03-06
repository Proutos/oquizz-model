const CoreModel = require('./coreModel');

class User extends CoreModel {

    id;
    firstname;
    lastname;
    email;
    hashpassword;
    is_newsletter;
    is_author;
    created_at;
    updated_at;

    constructor(objUser) {
        //this.id = objUser.id;
        this.firstname = objUser.firstname;
        this.lastname = objUser.lastname;
        this.email = objUser.email;
        this.hashpassword = objUser.hashpassword;
        this.is_newsletter = objUser.is_newsletter;
        this.is_author = objUser.is_author;
        //this.created_at = objUser.created_at;
        //this.updated_at = objUser.updated_at;
    };

    setFirstname(firstname) {
        this.firstname = firstname;
    };
    getFirstname(){
        return this.firstname;
    };

    setLastname(lastname) {
        this.lastname = lastname;
    };
    getLastname(){
        return this.lastname;
    };

    setEmail(email) {
        this.email = email;
    };
    getEmail(){
        return this.email;
    };

    setHashpassword(hashpassword) {
        this.hashpassword = hashpassword;
    };
    getHashpassword(){
        return this.hashpassword;
    };

    setIs_newsletter(is_newsletter) {
        this.is_newsletter = is_newsletter;
    };
    getIs_newsletter(){
        return this.is_newsletter;
    };

    setIs_author(is_author) {
        this.is_author = is_author;
    };
    getIs_author(){
        return this.is_author;
    };
};

module.exports = User;