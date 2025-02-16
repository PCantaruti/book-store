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
    try {
      const newBook = await book.create(req.body);
      res
        .status(201)
        .json({ message: "Livro cadastrado com sucesso.", book: newBook });
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
}

export default BookController;
