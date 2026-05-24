const mongoose =  require("mongoose");

const connectDB = async () => {
    //await mongoose.connect("mongodb+srv://rahulanand2690_db_user:S1EzpdI5pCQJFUFg@namastenode.bezolaz.mongodb.net/");
    await mongoose.connect("mongodb://rahulanand2690_db_user:S1EzpdI5pCQJFUFg@ac-kzxeh1k-shard-00-00.bezolaz.mongodb.net:27017,ac-kzxeh1k-shard-00-01.bezolaz.mongodb.net:27017,ac-kzxeh1k-shard-00-02.bezolaz.mongodb.net:27017/?ssl=true&replicaSet=atlas-pd7phi-shard-0&authSource=admin&appName=NamasteNode");
};



module.exports = connectDB;