const bookModel = require("../models/book.model");

const getAllBooks = async(req,res)=>{
    try{
        const book = await bookModel.find()
        if(book.length > 0){
            res.status(200).send({
                message:"Fetched all books",
                data : book
            })
        }else{
            res.status(404).send({
                message:"No books found",
                data : []
            })
        }
    }catch(err){
        res.status(500).send({
            message:"Error fetching books",
            error : err
        })
    }
}

const getBookById = async(req,res)=>{
    try{
        const book = await bookModel.findById(req.params.id)
       if(book){
        res.status(200).send({
            message:"Fetched book by id",
            data : book
        })
       }else{
        res.status(404).send({
            message:`Book doesnt exist by ${req.params.id}`
        })
       }
    }catch(err){
        res.status(500).send({
            message:`Error fetching book`,
            error : err
        })
    }
}

const createBook = async(req,res)=>{
    try{
        const book = await bookModel.create({
            title : req.body.title,
            author : req.body.author,
            year : req.body.year
        })
        res.status(201).send({
            message:"Book created successfully",
            data : book
        })
    }catch(err){
        res.status(500).send({
            message:"Error creating book",
            error : err
        })
    }
}

const deleteBook = async(req,res)=>{
    try{
        const book = await bookModel.findByIdAndDelete(req.params.id)
        if(book){
            res.status(200).send({
                message:"Book deleted successfully",
                data : book
            })
        }else{
            res.status(404).send({
                message:`Book doesnt exist by ${req.params.id}`
            })
        }
    }catch(err){
        res.status(500).send({
            message:"Error deleting book",
            error : err
        })
    }
}

const updateBook = async(req,res)=>{
    try{
        const updatedBookFormData = req.body;
        const updatedBook = await bookModel.findByIdAndUpdate(req.params.id, updatedBookFormData, {new: true})
        if(updatedBook){
            res.status(200).send({
                message:"Book updated successfully",
                data : updatedBook
            })
        }else{
            res.status(404).send({
                message:`Book doesnt exist by ${req.params.id}`
            })
        }
    }catch(err){
        res.status(500).send({
            message:"Error updating book",
            error : err
        })
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    deleteBook,
    updateBook
}       
