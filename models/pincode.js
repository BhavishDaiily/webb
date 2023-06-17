const Sequelize=require("sequelize")
const sequelize=require("../util/database")

const pincode=sequelize.define("pincode",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    fromPincode:Sequelize.BIGINT,
   toPincode:Sequelize.BIGINT,
})
module.exports=pincode
