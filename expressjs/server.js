const express = require("express");
const PORT = 4000;
const path = require("path");
const usersRouter = require("./routes/users.router");
const app = express();
const { default: mongoose } = require("mongoose");
const postsRouter = require("./routes/posts.router");
const productsRouter = require("./routes/products.router");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/static", express.static(path.join(__dirname, "public"))); // public 디렉토리에 접근(절대 경로) , '/static 가상경로 접두사
app.use(express.json()); //body Parser를 위한 미들웨어

mongoose
  .connect(
    `mongodb+srv://alsrhs98:akfhsldp98@express-cluster.e8qshrh.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`start: ${req.method} ${req.url}`);
  next(); // 다음 미들웨어로 넘어감

  const diffTime = Date.now() - start;
  console.log(`end: ${req.method} ${req.baseUrl} ${req.url} ${diffTime}ms`);
});

app.get("/", (req, res) => {
  res.render("index", {
    imageTitle: "It is a watermelon2",
  });
});

app.get("/", (req, res, next) => {
  setImmediate(() => {
    next(new Error("woops"));
  });
});

app.use((err, req, res, next) => {
  res.json({ message: error.message });
});

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/products", productsRouter);
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
