import express, {Request, Response} from 'express'
const path = require("path")
const app = express()
app.use(express.static(path.join( __dirname, '../dist/public')))
function Root(page: any){
    return path.join(__dirname, `../dist/public/${page}`)
}

interface IUser{
    nome: String;
    idade: number;
    altura?: number
}
const Users: IUser[] = []

app.get('/', (req:any,res:any)=>{
    res.sendFile(Root('index.html'));
})

app.get('/teste',(req:any,res:any)=>{
    res.sendFile(Root('teste.html'))
})
app.get('/testeI',  (req: Request, res: Response)=>{
    const newUser: IUser = {
        nome: 'Rodrigo',
        idade: 17,
        altura: 1.85
    }
    Users.push(newUser)
    res.json(Users)
})


const PORT = process.env.PORT || 3022
app.listen(PORT)
