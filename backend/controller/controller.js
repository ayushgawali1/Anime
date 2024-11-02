import animeModel from "../model/model.js";
import userModel from "../model/user.js"

export const add = async (req, res) => {
    const { name } = req.body;
    const { para } = req.params;

    try {

        const Model = model[para];
        if (!Model) {
            return res.status(404).json({ message: "Model not found" });
        }

        const existingName = await Model.findOne({ name });
        if (existingName) {
            return res.status(400).json({ message: "Name already exists" });
        }

        const newEntry = new Model(req.body);
        await newEntry.save();
        res.json({ message: "Added Successfully" });

    } catch (error) {
        console.log("Error in addAnime");
        res.json({ message: "Server Side error" });
    }
}

export const getAll = async (req, res) => {
    try {
        const get = await animeModel.find();
        res.json(get);
    }
    catch (error) {
        console.log("Error in getAll");
        res.json({ message: "Server Side error" });
    }
}


export const getOne = async (req, res) => {
    try {
        const { id } = req.query;
        const get = await animeModel.findOne({ _id: id });
        res.json(get)
    }
    catch (error) {
        console.log("Error in getOne");
        res.json({ message: "Server Side error" });
    }
}

export const addBookmarkAnime = async (req, res) => {
    try {
        const {userId,animeId} = req.body;
        const {bookmark} = await userModel.findById({_id:userId})
        if(bookmark[animeId]){
            return res.status(400).json({message:"alredy added to bookmark"});
        }
        bookmark[animeId] = 1;
        await userModel.findByIdAndUpdate(userId,{bookmark});
        res.status(200)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Side error" });
    }
}

export const getBookmarkAnime = async (req, res) => {
    try {
        const { userId } = req.query;
        const {bookmark} = await userModel.findById({_id:userId});
        res.json(bookmark);
    } catch (error) {
        console.log("getBookmarkAnime");
    }
}

export const removeBookmarkAnime = async (req, res) => {
    try {
        const {userId,animeId} = req.body;
        const {bookmark} = await userModel.findById({_id:userId})
        if(bookmark[animeId]){
            delete bookmark[animeId];
            await userModel.findByIdAndUpdate(userId,{bookmark});
            res.status(200)
        }else{
            return res.status(400).json({message:"does not exist in bookmark"});
        }
    } catch (error) {
        console.log("removeBookmarkAnime");
        res.status(500).json({ message: "Server Side error" });
    }
}