const database = require("./database-connection");

module.exports = {
    list(){
        return database("coffee")
    },
    read(id){
        return database("coffee")
        .where("id",id)
        .first()
    },
    create(coffee){
        return database("coffee")
        .insert(coffee, "*")
        .then(record => record[0])
    },
    update(id, coffee){
        return database("coffee")
        .where("id",id)
        .update(coffee, "*")
    },
    delete(id){
        return database("coffee")
        .where("id",id)
        .del()
    }
};
