import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const uri = process.env.MONGODB_URL;



const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export async function connect() {
    await mongoose.connect(uri, clientOptions);
    console.log("Database Connected");
}

//const url=`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@training.wbunv.mongodb.net/${process.env.MONGODB_DATABASE}?appName=Training`