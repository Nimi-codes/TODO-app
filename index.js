const express=require('express');
const app=express();
const port=8000;
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());
app.use(express.static('assets'));
app.listen(port,function(err){
    if(err){
        console.log(`There is an an errror while running server: ${err}`);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);
})