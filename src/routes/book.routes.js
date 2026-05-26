const express = require('express');

const router = express.Router();
const bookController = require("../controllers/book.controller");
const Book = require("../models/book.model");


//all the routes 

router.get("/get", bookController.getAllBooks);

router.get("/get/:id", bookController.getBookById);

router.post("/create", bookController.createBook);

router.put("/update/:id", bookController.updateBook);

router.delete("/delete/:id", bookController.deleteBook);

module.exports = router;