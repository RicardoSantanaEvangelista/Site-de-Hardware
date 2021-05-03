const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const arquivo = require("./routes/arquivo");
app.use("/",arquivo);




const port = 3000;
app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
});