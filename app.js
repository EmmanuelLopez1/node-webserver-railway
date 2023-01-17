import path from "path"
import { fileURLToPath } from "url"
import express from 'express'
import hbs from "hbs"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const port = process.env.PORT

// get current file url and  handle special charactes
let pathname = fileURLToPath(import.meta.url)
// get the root path.
const __dirname = path.dirname(pathname);

// HANDLEBARS
app.set("view engine", "hbs")
hbs.registerPartials(__dirname + '/views/partials');
console.log(__dirname + '\\views\\partials');

// Servir contenido estatico
// La carpeta publica tiene prioridad sobre las rutas que definimos.
app.use(express.static("public"))


app.get('/', (req, res) => {
    res.render('home', {
        nombre:"maxo",
        titulo:"curso node"
    });
    // res.send("baby")
})
app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre:"maxo",
        titulo:"curso node"
    })
})
app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre:"maxo",
        titulo:"curso node"
    })
})
// app.get('*', (req, res) => {
//     res.sendFile(__dirname + "/public/404.html")
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})