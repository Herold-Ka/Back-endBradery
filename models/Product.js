module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        'Product',{  
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.DataTypes.STRING(30),
                AllowNull: false,
            },
            /*image: {
                type: Sequelize.DataTypes.TEXT,
                AllowNull: false,
            },*/
            price: {
                type: Sequelize.DataTypes.DECIMAL(11, 10),
                AllowNull: false,
            },  
            inventory:{
                type: Sequelize.DataTypes.INTEGER,
                AllowNull: false,
            }  
        },
    )
}