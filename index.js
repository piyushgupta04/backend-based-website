const express = require("express")
const app = express()
const path = require("path");

app.use(express.static(path.join(__dirname, "public")))
app.set("view engien", "ejs");
app.set("views", path.join(__dirname, "/views"))

const port = 8080;

app.listen(port, ()=>{
  console.log(`Server is up and listening on port ${port}`);
});

app.get("/up", (req, res)=>{
    res.send({
        status: 200,
        activeRoutes: [
          "/page", "/page/:username", "/help", "/me"
        ]
    })
    console.log("Got a GET request on '/up' route!")
})

app.get("/me", (req, res)=>{
  console.log("Got a GET request on '/me' route!")
  res.render("me.ejs")
})

app.get("/page/:username", (req, res)=>{
  const { username } = req.params
  console.log(`Got a GET request on '/page/${username}' route!`)
  res.render("page.ejs", { username })
  console.log(username)
})

app.get("/page", (req, res)=>{
  console.log("Got a GET request on '/help' route, redirected to /help")
  res.render("help.ejs")
})

app.get("/help", (req, res)=>{
  console.log("Got a GET request on '/help' route!")
  res.render("help.ejs")
})