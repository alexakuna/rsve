module.exports.findCollection = function find (collection, query, callback) {
    mongoose.connection.db.collection(collection, function (err, collection) {
        collection.find(query).toArray(callback);
    });
}
