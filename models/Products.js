module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        'Products',{  
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.DataTypes.STRING(30),
                AllowNull: false,
            },
            image: {
                type: Sequelize.DataTypes.TEXT,
                AllowNull: false,
            },
            price: {
                type: Sequelize.DataTypes.DECIMAL(10, 2),
                AllowNull: false,
            },  
            inventory:{
                type: Sequelize.DataTypes.INTEGER,
                AllowNull: false,
            },
            
        },{
            timestamps: false,
        }
    )
}