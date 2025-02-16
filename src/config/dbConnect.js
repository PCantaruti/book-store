import mongoose from "mongoose";

async function dataBaseConnection() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
}

export default dataBaseConnection;
