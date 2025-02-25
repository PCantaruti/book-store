import { author } from "../model/Author.js";

class AuthorController {
  static async listAuthors(req, res) {
    try {
      const getAuthors = await author.find({});
      res.status(200).json(getAuthors);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao listar autores.` });
    }
  }

  static async createAuthor(req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res
        .status(201)
        .json({ message: "Autor cadastrado com sucesso.", author: newAuthor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao cadastrar autor.` });
    }
  }

  static async listAuthor(req, res) {
    try {
      const id = req.params.id;
      const getAuthor = await author.findById(id);
      res.status(200).json(getAuthor);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha na requisição.` });
    }
  }

  static async updateAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado com sucesso." });
    } catch (error) {
      res.status(500).json({ message: `${error.message}` });
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor removido com sucesso." });
    } catch (error) {
      res.status(500).json({ message: `${error.message}` });
    }
  }
}

export default AuthorController;
