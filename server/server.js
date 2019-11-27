const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const { getProducts, getProduct } = require('./routes/products');

const app = express();
const port = process.env.PORT || 4000;

app.use('/static', express.static(path.resolve(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/products', getProducts);
app.get('/api/products/:id', getProduct);

app.listen(port, () => console.log(`Listening on ${port}`));
