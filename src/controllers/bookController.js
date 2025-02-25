import { author } from "../model/Author.js";
import book from "../model/Book.js";

class BookController {
  static async listBooks(req, res) {
    try {
      const getBooks = await book.find({});
      res.status(200).json(getBooks);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao listar livros.` });
    }
  }

  static async createBook(req, res) {
    const newBook = req.body;
    try {
      const findAuthor = await author.findById(newBook.author);
      const newBookWithAuthor = { ...newBook, author: { ...findAuthor._doc } };
      const createdBook = await book.create(newBookWithAuthor);
      res
        .status(201)
        .json({ message: "Livro cadastrado com sucesso.", book: createdBook });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao cadastrar livro.` });
    }
  }

  static async listBook(req, res) {
    try {
      const id = req.params.id;
      const getBook = await book.findById(id);
      res.status(200).json(getBook);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha na requisição.` });
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado com sucesso." });
    } catch (error) {
      res.status(500).json({ message: `${error.message}` });
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro removido com sucesso." });
    } catch (error) {
      res.status(500).json({ message: `${error.message}` });
    }
  }

  static async listBooksByPublisher(req, res) {
    const publisher = req.query.publisher;

    try {
      const booksByPublisher = await book.find({ publisher: publisher });
      res.status(200).json(booksByPublisher);
    } catch (erro) {
      res.status(500).json({ message: `${error.message}` });
    }
  }
}

export default BookController;
