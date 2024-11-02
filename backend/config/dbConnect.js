import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.URL)
        console.log("DB connected");
    } catch (error) {
        console.log("DB not connecting" + error);
    }
}

export default dbConnect