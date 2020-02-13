require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");

//Server assignment deconstruction
const app = express();

// Controllers
const ac = require("./controllers/authController")
const pc = require("./controllers/postsController")


// const pc = require("./controllers/postsController")

// Destructuring private data from .env
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

// Middleware
// const auth = require('./middleware/authMiddleware');
app.use(express.static(__dirname + '/../public'))
app.use(express.json());


// Session
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}))

// Database Connection
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db is connected!")
})

// De-structured controllers
const { user, registerUser, loginUser, logoutUser } = ac;
const { allPosts, getAllPostsByUserId, addPostCount, addPost, editPost, deletePost, allPostsByCategoryName, postById, getRandomPosts, addToFavorites } = pc;


// Auth Endpoints
app.get("/auth/user", user); // Works
app.post("/auth/register", registerUser); //Works. Must specify isadmin
app.post("/auth/login", loginUser); // Works
app.post("/auth/logout", logoutUser); // Works
 

// Posts Endpoints
// Editing post COUNT: singular api/post. Editing full POST: plural api/posts
// NOTE: /api/randposts and /api/userposts for those pulls.

app.get("/api/posts",  allPosts); //Works
app.get("/api/post/:post_id",  postById) 
app.put("/api/count/:user_id", addPostCount) 
app.get("/api/randposts/:amount",  getRandomPosts) 
app.get("/api/posts/:category_name", allPostsByCategoryName) 
app.get("/api/userposts/:user_id", getAllPostsByUserId) 
app.post("/api/posts",  addPost); //Works
app.put("/api/posts/:post_id",  editPost); 
app.delete("/api/posts/:post_id",  deletePost); 
app.post("/api/favorites/:post_id", addToFavorites);

 

app.listen(SERVER_PORT, () => {
  console.log(`LOFI RADIO STATION #: ${SERVER_PORT}`)
})
