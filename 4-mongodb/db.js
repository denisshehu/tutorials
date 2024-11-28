const { MongoClient } = require("mongodb");

let dbConnection;
let uri =
  "mongodb+srv://Denis:2OLUOYnVfd2N0M0h@cluster0.edd9j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((error) => {
        console.log(error);
        return cb(error);
      });
  },
  getDb: () => dbConnection,
};
