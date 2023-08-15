import mongoose from "mongoose";

let isConnected = false; // track connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true); // Fixed syntax here

    if(isConnected) {
        console.log('Mongodb is connected')
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;

        console.log('MongoDB Connected')
    } catch (error) {
        console.log(error)
    }
}

// username - promptopia
// username - ozYnUiNA62orEzPz