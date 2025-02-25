import express from "express";
import authorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/authors", authorController.listAuthors);
routes.get("/author/:id", authorController.listAuthor);
routes.post("/author", authorController.createAuthor);
routes.put("/author/:id", authorController.updateAuthor);
routes.delete("/author/:id", authorController.deleteAuthor);

export default routes;
