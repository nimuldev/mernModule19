const app=require("./App")

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "img-src 'self'");
    next();
});

app.listen(5200,function (){
    console.log("BackEnd Running")
})