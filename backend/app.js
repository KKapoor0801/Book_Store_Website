const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const port = 5000;

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router) //localhost:5000/books

mongoose.connect(
"mongodb+srv://admin:HaelTCfeKNC8nAZJ@cluster0.newcl.mongodb.net/bookStore?retryWrites=true&w=majority"
).then(() => console.log("Connected to Database"))
.then(() => {
    app.listen(5000)
}).catch((err) => console.log(err));

// HaelTCfeKNC8nAZJ

// port = process.env.PORT || port;

// //for deployment
// if(process.env.NODE_ENV === "production"){
//     app.use(express.static("frontend/book-store/build"))
//         // app.get("*",(req,res) => {
//         //     res.sendFile(path.resolve(__dirname, 'frontend', 'book-store', 'build', 'index.html'));
//         // });
// }