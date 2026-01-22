// const http =require('http')
// let server=http.createServer((req,res)=>{
//     console.log("server is running on http://localhost:3000")
//     res.writeHead(200,{'content-type':'text/plain'})
//     res.end('Hello World!');


// })
// server.listen(3000)

const express=require("express");
const postsRoutes=require('./src/routes/posts.routes.js')

let app = express();
app.use(express.json())

let PORT = 3000;

app.get('/',(req,res)=>{
    res.status(200).send("Welcome to the blogify app");
})

app.use('/api/v1/posts',postsRoutes)

app.listen(PORT,()=>{
    console.log(`Server is runining on http://localhost:${PORT}`)
});
