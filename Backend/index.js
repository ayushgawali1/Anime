import express from "express";
import cors from "cors";
import userRoute from "./Routes/userRoute.js"
import connectDB from "./DB/db.js";

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

connectDB();

app.get("/",(req,res) =>(
    res.send("<h1>Api Working</h1>")
));

app.use("/user",userRoute) 

// Start Server
app.listen(PORT, () =>{ 
    console.log(`Server running on port ${PORT}`);
    console.log("http://localhost:4000");
});