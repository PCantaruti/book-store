import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    genre: { type: String, required: true },
    author: {
      name: { type: String, required: true },
      birthYear: { type: String, required: true },
    },
    releaseYear: { type: Number },
    pages: { type: Number },
    price: { type: Number, required: true },
  },
  { versionKey: false }
);

const book = mongoose.model("books", bookSchema);

export default book;
