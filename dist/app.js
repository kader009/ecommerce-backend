"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_routes_1 = require("./app/modules/products/product.routes");
const app = (0, express_1.default)();
// middileware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// routes
app.use('/api/v1/products', product_routes_1.ProductRouter);
app.get('/', (req, res) => {
    res.send({
        status: true,
        message: 'Server Live ⚡',
    });
});
exports.default = app;
