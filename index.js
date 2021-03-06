const express = require("express")
const ejs = require("ejs")
const path = require("path")
app = express()

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("src"));
app.use(express.static("src/css"));
app.use(express.static("src/js"));
//app.use(cookieParser());
app.set("view engine", "ejs");

app.listen("2000", () => {console.log("Listening on port 2000")})

app.get("/", (req,res)=>{
	res.render("main")
})