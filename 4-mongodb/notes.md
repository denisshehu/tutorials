# Mongo DB

### Installation

[MongoDB Community Server](https://www.mongodb.com/try/download/community)

[MongoDB Shell](https://www.mongodb.com/try/download/shell) (Package: msi)

Services &rarr; MongoDB Server (MongoDB) must be running.

`npm i mongodb`

### Command prompt

#### 5

`mongosh`: start shell

`show dbs`: get databases

`use <dbName>`: switch to database `<dbName>` (does not have to exist)

`cls`: clear screen

`db`: reference the current database

`show collections`: get collections of current database

`var name = "Denis"`: create variable `name`

`help`: get help

`exit`: exit the shell

#### 6

`db.<collectionName>`: reference the collection `<collectionName>` in the current database

`db.<collectionName>.insertOne({ property1: value1, property2: value2 })`: add document `{ property1: value1, property2: value2 }` to collection `<collectionName>` (collection does not have to already exist)

`.insertMany([{...}, {...}])`: add multiple documents

#### 7

`.find()`: get the first 20 documents (`it`: get the next 20 documents)

`.find({ property1: value1, property2: value2 })`: get the documents whose `property1` has value `value1` and `property2` has value `value2`

`.find({...}, { property: 1 })`: get only `property` for those documents that pass the filter `{...}` (can be `{}`)

`.findOne()`: get the first document that passes the filter

#### 8

`.find().count()`: get the number of documents that pass the filter

`.find().limit(n)`: get the first `n` documents that pass the filter

`.find().sort({ property: 1 })`: get the documents that pass the filter sorted by the value of `property` in ascending order (`{ property: -1 }` sorts in descending order)

#### 10

`.find({ property: { $gt: value } })`: get the documents whose `property` has value greater than `value`

`gte`: greater than or equal to

`lt`: less than

`lte`: less than or equal to

`.find({ $or: [{ property1: value1 }, { property2: value2 }] })`: get the documents whose `property1` has value `value1` or whose `property2` has value `value2`

#### 11

`.find({ property: { $in: [value1, value2] } })`: get the documents whose `property` has value of either `value1` or `value2`

`.find({ property: { $nin: [value1, value2] } })`: get the documents whose `property` does not have a value of `value1` or `value2`

#### 12

`.find({ propertyArray: value })`: get the documents whose `propertyArray`, which is an array, includes the value `value`

`.find({ propertyArray: [value] })`: get the documents whose `propertyArray`, which is an array, only includes the value `value`

`.find({ propertyArray: { $all: [value1, value2] } })`: get the documents whose `propertyArray`, which is an array, includes both `value1` and `value2`

`.find({ "propertyArray.property": value })`: get the documents whose `propertyArray`, which is an array of nested documents, includes a nested document whose `property` has a value of `value`

#### 13

`.deleteOne({ _id: value })`: delete the document with ID `value`

`.deleteOne({ property: value })`: delete the first document whose `property` has value `value`

`.deleteMany({ property: value })`: delete the documents whose `property` has value `value`

#### 14

`.updateOne({ _id: id }, { $set: { property1: value1, property2: value2 } })`: update `property1` to `value1` and `property2` to `value2` of the document with ID `id`

`.updateMany({ property1: value1 }, { $set: { property2: value2 } })`: update `property2` to `value2` of the documents whose `property1` has value `value1`

`.updateOne({ _id: id }, { $inc: { property: value } })`: increment `property` by `value` of the document with ID `id` (decrement if `value` < 0)

`.updateOne({ _id: id }, { $pull: { propertyArray: value } })`: remove `value` from `propertyArray`, which is an array, for the document with ID `id`

`.updateOne({ _id: id }, { $push: { propertyArray: value } })`: add `value` to `propertyArray`, which is an array, for the document with ID `id`

`.updateOne({ _id: id }, { $push: { propertyArray: { $each: [value1, value2] } } })`: add `value1` and `value2` to `propertyArray`, which is an array, for the document with ID `id`
