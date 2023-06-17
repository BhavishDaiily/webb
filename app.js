const express=require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
const merge=require("./controlers/merge_datatable")

const db=require("./util/database")
const app=express()

app.use(cors())
app.use(bodyParser.json())

app.use("/user",merge.mergeDatabase)
db.sync().then(()=> 
app.listen(4000))
.catch((err)=>console.log("error in db"))

