const express = require("express");
const expressHandlebars = require("express-handlebars");

const port = process.env.PORT || 3000;

const app = express();
app.set("port", port);
app.set("views", __dirname + "/views");

app.use(express.static(`${__dirname}/public`));

app.engine(
	"hbs",
	expressHandlebars.engine({
		layoutsDir: `${__dirname}/views/layouts`,
		partialsDir: `${__dirname}/views/partials`,
		defaultLayout: "layout",
		extname: "hbs",
	})
);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
	res.locals.title = "Jeopardize Contest";
	res.render("index");
});

app.get("/task1", (req, res) => {
	let title = req.query.title;
	let { emotions } = require("./models/data");

	let selectedEquations = emotions.filter(
		(emotion) => title == emotion.title
	);

	let quotePath =
		selectedEquations.length > 0
			? selectedEquations[0].quotePath
			: "images/task1/default.jpg";

	res.locals.title = "Inspiring Quotes";
	res.locals.author = "20127435 - Tran Van An";
	res.locals.emotions = emotions;
	res.locals.quotePath = quotePath;

	res.render("task1");
});

app.get("/task2", (req, res) => {
	res.locals.title = "Jars Saving";
	res.render("task2");
});

app.get("/task3", (req, res) => {
	res.locals.title = "TV Sales";
	res.render("task3");
});

app.listen(app.get("port"), () => {
	console.log(`App listening on http://localhost:${port}`);
});
