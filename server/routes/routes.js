const { getProducts, createProducts, getProductById, deleteProducts } = require('../controller/product');

const routes = require('express').Router();



routes.route('/products').get(getProducts);
routes.route('/products').post(createProducts);
routes.route('/products/:id').get(getProductById);
routes.route('/products/:id').delete(deleteProducts);


module.exports = routes;