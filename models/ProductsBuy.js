module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        'productbuys',{  
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.DataTypes.STRING(30),
                AllowNull: false,
            },
            quantity:{
                type: Sequelize.DataTypes.INTEGER,
                AllowNull: false,
            },
            price: {
                type: Sequelize.DataTypes.DECIMAL(10, 2),
                AllowNull: false,
            },  
            totalPrice:{
                type: Sequelize.DataTypes.DECIMAL(10, 2),
                AllowNull: false,
            },
            
        },{
            timestamps: false,
        }
    )
}