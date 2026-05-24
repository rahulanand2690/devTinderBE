const express = require('express');
const app = express();
const {adminAuth} = require('./utils/auth.js');

/* app.use("/hello",(req,res) => {
res.send("Hello Hello Hello1")
})
 */
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
/* app.get("/user",(req,res) =>{
    res.send({"firstName":"Rahul","lastName":"Anand"});
});

app.use("/user/:userId/:name/:password",(req,res) =>{
    console.log("***")
    console.log(req.params)
res.send("Default route app.use111")
}) 
 */
/* app.post("/user",(req,res) =>{


    res.send("Data Saved successfully1212221121221");
})

app.delete("/user",(req,res) =>{
res.send("Data Deleted successfully");
}) */


/* app.use("/",(req, res) =>{
    res.send("Hello from server")
}); */


/* app.use("/user", 
    (req,res,next) =>{
        console.log("Resquest Handler 1");
        //res.send("Hellow from Request Handler 1");
        next();
    },
    (req, res) =>{
        console.log("Resquest Handler 2");
        res.send("Hello from Request Handler 2");
    }
)
 */

/* app.use("/user", 
    (req,res,next) =>{
        console.log("Resquest Handler 1");
        //res.send("Hellow from Request Handler 1");
        next();
    }

)

app.use("/user", 
    (req,res,next) =>{
        console.log("Resquest Handler 2");
        res.send("Hellow from Request Handler 2");
    
    }

) */

    // Mddlewares in Node Js

    app.use("/admin", adminAuth);

    app.get("/admin/getAllData", (req,res) =>{
        try{
            throw new Error("sajfnjknjkn");
            res.send("All data for admin sent successfully");
        }catch(err){
            res.status(500).send("Some issue with fetching datafor admin");
        }
    })

    app.delete("/admin/deleteAllData", (req,res) =>{
        throw new Error("sajfnjknjkn");
        res.send("All data Deleted successfully !!!!");
    })

    app.use("/",(err, req, res,next) =>{
        if(err){
            res.status(500).send("Something went wrong");
        }
    })
app.listen(7777, () =>{
    console.log("server is  successfully listening to port 7777..")
})
