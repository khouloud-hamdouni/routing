const express= require('express');
const app=express();
const path=require('path')
const port=3000;
const {testDate}=require ('./middelwares/date')
app.set('views','./views');
app.set("view engine","pug");
app.use(express.static(path.join(__dirname,"public")));
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/contact',(req,res)=>{
    res.render("contact")
})
app.get('/services',(req,res)=>{
    res.render("services")
})

app.listen(port,(err)=>{
    if(err){
console.log("server can not run")
    }
    console.log('server running with success :)')

})