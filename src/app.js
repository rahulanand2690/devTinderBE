const express = require('express');
const app =express();

app.use("/hello",(req,res) => {
res.send("Hello Hello Hello1")
})

/* app.use("/user",(req,res) =>{
    console.log(req.query)
res.send("Default route app.use")
}) */
/* app.use("/user:userId",(req,res) =>{
    console.log("***")
    console.log(req.params)
res.send("Default route app.use")
}) */
/* app.use("/user/:userId/:name/:password",(req,res) =>{
    consol.log("***")
    console.log(req.params)
res.send("Default route app.use")
}) */
app.get("/user",(req,res) =>{
    res.send({"firstName":"Rahul","lastName":"Anand"});
});

app.use("/user/:userId/:name/:password",(req,res) =>{
    console.log("***")
    console.log(req.params)
res.send("Default route app.use111")
}) 

app.post("/user",(req,res) =>{
    res.send("Data Saved successfully");
})

app.delete("/user",(req,res) =>{
res.send("Data Deleted successfully");
})


/* app.use("/",(req, res) =>{
    res.send("Hello from server")
}); */


app.listen(7777, () =>{
    console.log("server is  successfully listening to port 7777..")
})
