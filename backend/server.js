import server from "./app.js";
import { connectDB } from "./config/db.js";

import dotenv from "dotenv";
dotenv.config();

const serverStart = server.listen(3000, async (err) => {
  if (err) {
    console.log(`server failed with error ${err}`);
  } else {
    await connectDB();
   console.log(`server is running at http://localhost:${process.env.PORT}`);
      // console.log(`server is running at http://localhost:3000`);
  }
});
