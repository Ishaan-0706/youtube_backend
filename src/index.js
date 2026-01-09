import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({ path: '.env' });  

const app = express();  

app.use(express.json());

const startServer = async () => {
  try {
    await connectDB(); 
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port ${process.env.PORT || 8000}`);
    });
  } catch (err) {
    console.error('MONGO connection failed:', err);
    process.exit(1);
  }
};

startServer();


// import express from "express";
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", () => {
//       console.log("ERROR: " , error);
//       throw  error
//     });
//     app.listen(process.env.PORT, () => {
//         console.log(`app is listening on port ${process.env.PORT}`)
//     })
//   } catch (error) {
//     console.log("ERROR :  ", error);
//     throw err;
//   }
// })();
