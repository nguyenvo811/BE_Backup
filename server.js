const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./src/config/myDB");
const port = 8081;

const userModel = require("./src/model/user.model")

const userRoute = require("./src/route/user.route");
const categoryRoute = require("./src/route/category.route");
const productRoute = require("./src/route/product.route");

// parse requests of content-type - application/json
const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,            //access-control-allow-credentials:true
	optionSuccessStatus: 200,
}

app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

dotenv.config();
app.set("view engine", "ejs");

connectDB();

app.use(userRoute, categoryRoute, productRoute);
app.use(userModel);



// set port, listen for requests
app.listen(port, () => {
	console.log("Server on port: " + port);
});