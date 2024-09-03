const express = require('express')
const path = require("path")
const app = express()
app.use(express.static(path.join( __dirname, '../dist/public')))
function Root(page: any){
    return path.join(__dirname, `../dist/public/${page}`)
}


app.get('/', (req:any,res:any)=>{
    res.sendFile(Root('index.html'));
})

app.get('/teste',(req:any,res:any)=>{
    res.sendFile(Root('teste.html'))
})


const PORT = process.env.PORT || 3022
app.listen(PORT)
