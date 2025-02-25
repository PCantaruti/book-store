import express from "express";
import bookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/books", bookController.listBooks);
routes.get("/books/search", bookController.listBooksByPublisher);
routes.get("/books/:id", bookController.listBook);
routes.post("/books", bookController.createBook);
routes.put("/books/:id", bookController.updateBook);
routes.delete("/books/:id", bookController.deleteBook);

export default routes;
