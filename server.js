const express = require("express");
require("dotenv").config(); //for loading environment variables
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("passport");
const Cors = require("cors")
const app = express();


const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL, {useNewUrlParser:true,useUnifiedTopology: true})//Connect MongoDB
.then(()=>console.log('Mongoose connected successeful...'))
.catch(err => console.log(err)) 
mongoose.set("useFindAndModify", false);
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(Cors())
app.use(passport.initialize());
require("./middleware/passport")(passport);

app.use("/api/posts/", require("./routes/api/post"));
app.use("/api/users", require("./routes/api/user"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
       res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
 }

const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`Server up and running at ${PORT}!...`));