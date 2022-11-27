const express = require("express");
const expressHandlebars = require("express-handlebars");

const port = process.env.PORT || 3000;

const app = express();
app.set("port",port);
app.set('views', __dirname + '/views');
app.use(express.static(`${__dirname}/public`));


app.engine("hbs",expressHandlebars.engine({
  layoutsDir:`${__dirname}/views/layouts`,
  partialsDir:`${__dirname}/views/partials`,
  defaultLayout:"layout",
  extname:"hbs"
}));
app.set("view engine","hbs");

app.get("/",(req,res)=>{
  res.render("index");
});

const task3Handler = require('./routes/task3');
app.get("/task3",task3Handler);

app.listen(app.get("port"),()=>{
  console.log(`App listening on http://localhost:${port}`);
});