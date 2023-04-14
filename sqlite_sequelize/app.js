const sequelize = require('./db')
const Usuario = require("./usuario")


async function crearUsuarios(){
    const datosJuanPerez = {
        nombre: "Juan",
        apellido: "Perez",
        usuario: "JuanP",
        password: "kjasydghb",
        email: "jperez@test.com"
    }
    const juanPerez = await Usuario.create(datosJuanPerez)
    console.log("Usuario Creado ID: ", juanPerez.id);

    const datosMarioJulio = {
        nombre: "Mario",
        apellido: "Julio",
        usuario: "marioJ",
        password: "nduhsuvnsuvbn",
        email: "marito@test.com"
    }
    const marioJulio = await Usuario.create(datosMarioJulio)
    console.log("Usuario Creado ID: ", marioJulio.id)
}

async function recuperarUsuarios(){
    const usuarios = await Usuario.findAll()
    usuarios.forEach((u) =>{
        console.log(`|${u.nombre}|${u.apellido}|${u.usuario}|${u.email}`)
    })
}


async function main(){
    try{
        await sequelize.sync()
        await crearUsuarios()

        await recuperarUsuarios()
        await sequelize.authenticate()

        console.log("Base de Datos inicializada")
    } catch (err) {
        console.error("Ha ocurrido un Error: ", err)
    }
}

main()