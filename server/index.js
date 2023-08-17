const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const routes = require("./routes/routes");

dotenv.config();

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.raw());
app.use('/api/v1', routes);




const port = process.env.PORT || 5000;
app.listen(port, async () => {

    console.log(`Server running on ${ port }`);
});



