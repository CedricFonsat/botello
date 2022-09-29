import express from 'express';
import mongoose from "mongoose";

const db = "mongodb://localhost:27017/botello"
const app = express()
const router = express.Router()

app.use(express.static('./assets'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)


// views 
router.get('/', function(req, res) {
    res.render('./base.twig');
   });

app.listen(3000, function(err){
    if (err) {
        console.log(err);
    }else{
        console.log("connected to localhost 3000");
    }
})

mongoose.connect(db,(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("connected to database mongodb (c'est dur....)");
    }
})