const express = require('express')
const path = require('path');
const app = express();

const { get } = require('https');



app.set('view engine', 'ejs');

const staticPath = path.join(__dirname, 'public');


app.get('/', function(req, res)
{
    res.sendFile(`${staticPath}/Index.html`);
    console.log(req.query.name);
    console.log(req.ip);
    //getData();
});

app.get("/about", function(req, res)
{
    const user = {
        name: "Vishal",
        company: "Winjit",
        position: "Software Developer"
    }
    res.render('about', {user});
})
app.get("*", function(req, res)
{
    res.sendFile(`${staticPath}/nopage.html`);
})



app.listen(3000);