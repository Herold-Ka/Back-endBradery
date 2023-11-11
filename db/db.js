const Sequelize = require("sequelize")
dotenv = require("dotenv");
dotenv.config();

const db = {};

const dbinfo = new Sequelize("backendbradery","root","exemple", {
        host: "db",
        dialect: "mysql",
        port: 3306,
        pool: {
            max: 100,
            min: 0,
        },
    }
);

dbinfo.authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

db.products = require("../models/Products")(dbinfo, Sequelize);
db.productsBuy = require("../models/ProductsBuy")(dbinfo, Sequelize)

//dbinfo.sync({ force: true });

db.dbinfo = dbinfo;
db.Sequelize = Sequelize;
module.exports = db;