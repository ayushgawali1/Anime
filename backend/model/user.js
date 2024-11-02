import mongoose from "mongoose";

const userSchema = await mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    favourate:{
        type:Object,
        default:{}
    },
    bookmark:{
        type:Object,
        default:{}
    },
    list:{
        type:[]
    },
    avtar:{
        type:String,
        default:""
    }
});

const userModel = await mongoose.model.user || mongoose.model("user",userSchema)

export default userModel