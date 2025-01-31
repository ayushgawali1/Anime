import express from "express";
import { addAnime, userController } from "../Controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/getUser",userController)

userRoute.post("/addAnime",addAnime)

export default userRoute