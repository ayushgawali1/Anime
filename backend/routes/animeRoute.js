import express from "express";
import { add , getAll , getOne , addBookmarkAnime , getBookmarkAnime , removeBookmarkAnime } from "../controller/controller.js";

const animeRoute = express.Router();

// add
animeRoute.post("/:para/add",add);

// get
animeRoute.get("/getall",getAll);

animeRoute.get("/getone",getOne);

animeRoute.post("/add-bookmarkAnime",addBookmarkAnime)

animeRoute.get("/get-bookmarkAnime",getBookmarkAnime)

animeRoute.post("/remove-bookmarkAnime",removeBookmarkAnime)

export default animeRoute;