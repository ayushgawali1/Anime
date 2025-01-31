import mongoose from "mongoose";

const URL = "mongodb+srv://saga:saga@cluster0.4d1sxdg.mongodb.net/Anime"

const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('MongoDB Connection Error:', err.message);
    }
};

export default connectDB