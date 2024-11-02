import userModel from "../model/user.js";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = async (req,res) => {
    try {
        const {username,password,email} = req.body;
        
        const existingUser = await userModel.findOne({username:username});

        if (existingUser) {
            return res.status(400).json({message:"user name alredy exist"});
        }

        const existingEmail = await userModel.findOne({email:email});

        if (existingEmail) {
            console.log("enter");
            return res.status(400).json({message:"Email name alredy exist"});
        }

        const hashPassword = await bycrypt.hash(password, 10);
        const token = await jwt.sign({ username: username,email:email }, 'secrectKey');
        
        const newUser = await new userModel({
            username:username,
            password:hashPassword,
            email:email
        });
        await newUser.save();
        return res.status(200).json({message:"Register Succesfully",token:token,id:newUser._id});

    } catch (error) {
        res.status(500).json({message:"Server Error"})
        console.log("asdadasdasdas" + error);
    }
}

export const login = async (req,res) => {
    try {
        const {username,password} = req.body;
        const checkUserName = await userModel.findOne({username:username});
        if (!checkUserName) {
            return res.status(400).json({message:"user name does not exist"});
        }

        await bycrypt.compare(password, checkUserName.password, function(err, responce) {
            if(responce){
                const token = jwt.sign({ username:checkUserName.username,email:checkUserName.email }, 'secrectKey');
                return res.status(200).json({message:"Login Succesfully",token:token,id:checkUserName._id});
            }
            else{
                return res.status(400).json({message:"password is incorrect"});
            }
        });
        
    } catch (error) {
        res.status(500).json({message:"Server Error"})
        console.log("asdadasdasdas" + error);
    }
}