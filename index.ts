import express from "express";
import mongodbLoader from "./loaders/mongodb.loader";
import expressLoader from "./loaders/express.loader";

const app: express.Application = express();
const port = process.env.PORT || 3000;

mongodbLoader();
expressLoader(app);

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
  console.log("Call / to check if it works !");
});
