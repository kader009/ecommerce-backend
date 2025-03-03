"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_routes_1 = require("./app/modules/products/product.routes");
const order_routes_1 = require("./app/modules/orders/order.routes");
const user_routes_1 = require("./app/modules/users/user.routes");
const errorHandler_1 = require("./utils/errorHandler");
const globalErrorhandler_1 = __importDefault(require("./app/middleware/globalErrorhandler"));
const app = (0, express_1.default)();
// middileware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// routes
app.use('/api/v1/products', product_routes_1.ProductRouter);
app.use('/api/v1/orders', order_routes_1.OrderRouter);
app.use('/api/v1/users', user_routes_1.UserRouter);
// global error handler
app.use(globalErrorhandler_1.default);
// error handler
app.use(errorHandler_1.errorHandler);
app.get('/', (req, res) => {
    res.send({
        status: true,
        message: 'Server Live ⚡',
    });
});
exports.default = app;
