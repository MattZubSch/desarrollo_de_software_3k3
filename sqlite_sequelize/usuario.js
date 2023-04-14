const { Model, DataTypes } = require("sequelize") 
const sequelize = require("./db")

const Usuario = sequelize.define(
    "Usuario",
    {
        id: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {type: DataTypes.STRING},
        apellido: {type: DataTypes.STRING},
        usuario: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {type: DataTypes.STRING},
        email: {
            type: DataTypes.STRING,
            validate: {isEmail: true}
        },
        fechaAlta: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },    
    {
        timestamps: false,
    }
)

module.exports = Usuario