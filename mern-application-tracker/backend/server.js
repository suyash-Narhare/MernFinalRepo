const express=require("express");

const cors=require("cors");

const mongoose=require("mongoose");

mongoose.Promise=global.Promise;

require("dotenv").config();

const app=express();

const port=process.env.PORT || 27017;

app.use(cors());

app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//  console.log("MongoDB database connection established successfully");
// })


mongoose.connect('mongodb://127.0.0.1:27017',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("MongoDB database connection established successfully"))
	.catch((error)=>console.log(error));

const exercisesRouter=require("./routes/exercises");
const usersRouter=require("./routes/users");

app.use("/exercises",exercisesRouter);
app.use("/users",usersRouter);

app.listen(port, () => {
    console.log("server is running on port:" + port);
});