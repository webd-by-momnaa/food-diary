// const express = require("express");
// const app = express();
// const cors = require("cors")
// const mongoose = require("mongoose")
// const testRoute = require("./router")
// const port = 4000

// mongoose.connect("mongodb+srv://momnausman18:DLzfJQFDxzetpUTH@cluster0.u8yxe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
// .then(()=>{console.log("successfully done")})
// .catch((err)=>{console.log(err.message)})

// //Middleware
// app.use(express.json())
// app.use(cors())
// app.use("/start", testRoute)     //mounts router of testRoute to the path of /api
//   app.listen(port,()=>{
//     console.log(`http://localhost:${port}`)
//   })



// const express = require("express");
// const app = express();
// const cors = require("cors");
// const mongoose = require("mongoose");
// const flowerRoute = require("./flowerRouter");
// const port = 5000


// app.use(express.json());
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(expressFormidable());
// // Connect to MongoDB
// mongoose.connect("mongodb+srv://momnausman18:DLzfJQFDxzetpUTH@cluster0.u8yxe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
//     .then(()=>{ console.log("Connected to MongoDB successfully")})
//     .catch((err)=>{console.error(err.message)});

// // Middleware



// // Routes
// app.use("/start", flowerRoute);

// // Start the server
// app.listen(port,() => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// "mongodb+srv://momnausman18:DLzfJQFDxzetpUTH@cluster0.u8yxe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routers/authRouter");
const rateRouter = require("./routers/rateRouter");
const foodRouter = require("./routers/foodRouter");
const foodBlogRouter = require("./routers/foodBlogRouter")
const foodProfileRouter = require("./routers/foodProfileRouter")
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect("mongodb+srv://momnausman18:DLzfJQFDxzetpUTH@cluster0.u8yxe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/user", authRouter);
app.use("/rate", rateRouter);
app.use("/recipe", foodRouter);
app.use("/blog", foodBlogRouter);
app.use("/profile", foodProfileRouter);


// Start the Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
