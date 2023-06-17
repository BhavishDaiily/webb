const Sequelize=require("sequelize")
const sequelize=require("../util/database")

const base_services=sequelize.define("base_services",{
   
    TO_SERVICE:Sequelize.BIGINT,
    XPRESSBEES_SERVICE:Sequelize.STRING,
    DHL_SERVICE:Sequelize.STRING,
    BLUEDART_SERVICE:Sequelize.STRING,
    GATI_SERVICE:Sequelize.STRING,
    DPWORLD_SERVICE:Sequelize.STRING,
},{timestamps:false})
module.exports=base_services
