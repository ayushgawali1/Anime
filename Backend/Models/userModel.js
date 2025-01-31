import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    watched:{
        type:[],
        default:[]
    },
    towatch:{
        type:[],
        default:[]
    },
    watching:{
        type:[],
        default:[]
    },
    collections:{
        type:[],
        default:[]
    }
});

// Create User Model
const userModel = mongoose.model.User || mongoose.model("User", userSchema);

export default userModel