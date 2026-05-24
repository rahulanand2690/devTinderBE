const adminAuth = (req,res,next)=>{
        const token = "abc";
        const isAdmin =  token === "abc";
        if(!isAdmin) {
            res.status(401).send("Unauthorized Access");
        } else {
            next();
        }
    }

module.exports = {
    adminAuth,
};