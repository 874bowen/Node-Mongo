const assert = require("assert");
const { log } = require("console");

exports.insertDocument = (db, document, collection, callback) =>{
     const coll = db.collection(collection);
     return coll.insert(document);
};

exports.findDocuments = (db, collection, callback) =>{
     const coll = db.collection(collection);
     return coll.find({}).toArray(); // all documents pass {} empty obj
};

exports.removeDocument = (db, document, collection, callback) =>{
     const coll = db.collection(collection);
     return coll.deleteOne(document);
}

exports.updateDocument = (db, document, update, collection, callback) =>{
     const coll = db.collection(collection);
     return coll.updateOne(document, { $set: update }, null); // pass fields that need to be updated $set: update
}