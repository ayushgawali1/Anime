import mongoose from "mongoose";

const animeScheme = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true
    },
    image:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
});

const animeModel = mongoose.model.anime || mongoose.model("anime",animeScheme)

export default animeModel