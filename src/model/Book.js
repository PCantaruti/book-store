import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    genre: { type: String, required: true },
    releaseYear: { type: Number },
    pages: { type: Number },
    price: { type: Number, required: true },
    publisher: { type: String },
    author: authorSchema,
  },
  { versionKey: false }
);

const book = mongoose.model("books", bookSchema);

export default book;
