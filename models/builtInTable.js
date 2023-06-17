const Sequelize=require("sequelize")
const sequelize=require("../util/database")

const builtInTable=sequelize.define("builtInTable",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    fromAddress:Sequelize.BIGINT,
   toAddress:Sequelize.BIGINT,
   tat:Sequelize.INTEGER,
   service:Sequelize.STRING,
   
})
module.exports=builtInTable
