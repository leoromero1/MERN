import mongoose from "mongoose";

const uriDB = "mongodb://127.0.0.1:27017";
const connectDB = async () => {
  try {
    await mongoose.connect(`${uriDB}/merndb`);
    console.log(">>>DB connected<<<");
  } catch (error) {
    console.log("DB: no conectado", error);
  }
};

export default connectDB;
