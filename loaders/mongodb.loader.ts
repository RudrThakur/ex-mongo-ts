import mongoose from "mongoose";

const uri = "mongodb://localhost:27017";

export default () => {
  console.log("Connecting to MongoDB...");
  mongoose.connect(uri, {});
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
};
