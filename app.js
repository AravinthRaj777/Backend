const express = require('express');
const connectDatabase = require('./config/connectDatabase');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname,'config','config.env') });

//Importing Routes 
const products = require('./routes/product')
const orders = require('./routes/order')


//Connecting to the database
connectDatabase();


//Setting up the app Medileware
app.use(express.json());
//Setting up the server
app.use('/api/v1/',products);
app.use('/api/v1/',orders);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});