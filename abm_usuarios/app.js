import * as sqlite3 from 'sqlite3'

const db = new sqlite3.default.Database("./usuarios.db",sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)
})

const sql = "CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nombre, apellido, usuario, password, email)";
db.run(sql)

const sql_insert = "INSERT INTO usuarios (nombre, apellido, usuario, password, email) VALUES (?,?,?,?,?)";

const params = ["Juan", "Gomez", "juagome123", "pepito123", "juangomez@gmail.com"]

db.run(sql_insert, params, (err) => {
    if (err) return console.error(err.message)
})

const sql_select = "SELECT * FROM usuarios"
db.all(sql_select, [], (err,rows) => {
    if (err) return console.error(err.message);
    rows.forEach((row) => {
        console.log(row)
    })
})

