const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname+"/public")));



mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("connexion ok"))
.catch((erreur)=>console.log(erreur));


const userRoute = require('./routes/UserRoute');
app.use("/user",userRoute);

const postRoute = require('./routes/PostRoute');
app.use("/Post",postRoute);

const messageRoutes = require('./routes/MessageRoute');
app.use("/Message",messageRoutes);

const categorieRoutes = require("./routes/CategorieRoute");
app.use("/Categorie",categorieRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server ok "));