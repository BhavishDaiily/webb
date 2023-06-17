const Sequelize=require("sequelize")
const sequelize=require("../util/database")

const base_tats=sequelize.define("base_tats",{
   FROM_TAT:Sequelize.BIGINT,
   TO_TAT:Sequelize.BIGINT,
   XPRESSBEES_TAT:Sequelize.STRING,
   DHL_TAT:Sequelize.STRING,
   BLUEDART_TAT:Sequelize.STRING,
   GATI_TAT:Sequelize.STRING,
   DPWORLD_TAT:Sequelize.STRING,
},{timestamps:false})
module.exports=base_tats
