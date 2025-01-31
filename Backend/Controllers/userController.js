import userModel from "../Models/userModel.js";

export const userController = async (req, res) => {
    const { id } = req.body;
    try {
        if (!id) {
            return res.json("Id not present");
        }
        let user = await userModel.findOne({ id });

        if (!user) {
            user = new userModel({ id: id });
            await user.save();
        }
        res.json({ user });
    } catch (error) {
        console.log(error);
    }
}

export const addAnime = async (req, res) => {
    try {
        const { id, anime, status } = req.body;
        if (!id) {
            return res.json("Id not present");
        }
        let user = await userModel.findById(id);

        let index = user[status]?.findIndex((item) => item.id == anime.id);

        if (index !== -1) {
            user[status].splice(index, 1);
            res.json(false)
        } else {
            user[status].push(anime);
            res.json(true)
        }
        await user.save();
    } catch (error) {
        console.log(error);
    }
}