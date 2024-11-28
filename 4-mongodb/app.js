const express = require("express");
const { connectToDb, getDb } = require("./db");
const { ObjectId } = require("mongodb");

const app = express();
app.use(express.json());

// DB connection
let db;

connectToDb((error) => {
  if (!error) {
    app.listen(3000, () => {
      console.log("Listening on port 3000.");
    });

    db = getDb();
  }
});

// routes
app.get("/books", (req, res) => {
  const page = req.query.page || 0;
  const booksPerPage = 3;

  let books = [];

  db.collection("books")
    .find()
    .sort({ author: 1 })
    .skip(page * booksPerPage)
    .limit(booksPerPage)
    .forEach((book) => books.push(book))
    .then(() => {
      res.status(200).json(books);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the data." });
    });
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;

  if (ObjectId.isValid(id)) {
    db.collection("books")
      .findOne({ _id: new ObjectId(id) })
      .then((document) => {
        res.status(200).json(document);
      })
      .catch((error) => {
        res.status(500).json({ error: "Could not fetch the data." });
      });
  } else {
    res.status(500).json({ error: "Not a valid document ID." });
  }
});

app.post("/books", (req, res) => {
  const book = req.body;

  db.collection("books")
    .insertOne(book)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Could not create a new document." });
    });
});

app.delete("/books/:id", (req, res) => {
  const id = req.params.id;

  if (ObjectId.isValid(id)) {
    db.collection("books")
      .deleteOne({ _id: new ObjectId(id) })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(500).json({ error: "Could not delete the document." });
      });
  } else {
    res.status(500).json({ error: "Not a valid document ID." });
  }
});

app.patch("/books/:id", (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  if (ObjectId.isValid(id)) {
    db.collection("books")
      .updateOne({ _id: new ObjectId(id) }, { $set: updates })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(500).json({ error: "Could not update the document." });
      });
  } else {
    res.status(500).json({ error: "Not a valid document ID." });
  }
});
