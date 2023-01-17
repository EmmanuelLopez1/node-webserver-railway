import http from "http"
import fs from "fs"

http.createServer((req, res)=>{
    res.setHeader('Content-disposition', 'attachment: filename=file.csv')
    res.setHeader('Content-type', 'text/csv')
    const file = fs.readFileSync("./Book1.csv", {encoding:"utf-8"})
    console.log(JSON.stringify(file));
    res.write(file)
    res.end()
})
.listen(8080)
console.log("listen on port 8080");