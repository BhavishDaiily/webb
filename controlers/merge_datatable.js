const pincodeTable=require("../models/pincode")
//const builtInTable=require("../models/builtInTable")
//const base_tat=require("../models/base_tats")
const base_tats = require("../models/base_tats")
const base_services=require("../models/base_services")
exports.mergeDatabase=async(req,res)=>{
    const fpin=req.body.fpin
    const tpin=req.body.tpin
    const data=await pincodeTable.create({
        fromAddress:fpin,
        toAddress:tpin
    }) 
    //const response=await builtInTable.findAll({where:{fromAddress:fpin,toAddress:tpin}})
    const response=await base_tats.findOne({where:{FROM_TAT:fpin,TO_TAT:tpin}})
   const responses=await base_services.findOne({where:{TO_SERVICE:tpin}})
   console.log("response-->",response,responses)
    res.json({data:response,result:responses})
  
}
