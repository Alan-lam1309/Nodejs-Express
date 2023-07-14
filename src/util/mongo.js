module.exports = {
    mutipleMongoToObject: (mongoArray) => {
        return mongoArray.map((mongo) => mongo.toObject());
    },
    mongoToObject: (mongo) => {
        return mongo ? mongo.toObject() : mongo;
    },
};
