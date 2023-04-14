const { Modal, DataTypes } = require("sequelize")
const sequelize = require("./db")

const Usuario = sequelize.define("Usuario", {
        nombre: {type: DataTypes.STRING, allowNull: false},
        apellido: {type: DataTypes.STRING, allowNull: false},
        usuario: {type: DataTypes.STRING, allowNull: false},
        password: {type: DataTypes.STRING, allowNull: false},
        email: {type: DataTypes.STRING, allowNull: false, unique: true, validate: {isEmail: true}}
    },{
        sequelize,
        modelName: "usuario",
        timeStamps: false,
    }    
)

module.exports = Usuario