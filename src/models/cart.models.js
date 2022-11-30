const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     addToCart:
 *       type: object
 *       properties:
 *         productId:
 *           type: integer
 *           example: 1
 *         quantity:
 *           type: integer
 *           example: 0
 *     newProductInCart:
 *       type: object
 *       properties:
 *         cartId:
 *           type: integer
 *           example: 1
 *         quantity:
 *           type: integer
 *           example: 4
 *         productId:
 *           type: integer
 *           example: 2
 *         price:
 *           type: integer
 *           example: 1500
 *         name:
 *           type: string
 *           example: iPhone 14
 *         stock:
 *           type: integer
 *           example: 24
 *     getAllProductsInCart:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           readOnly: true 
 *           example: 1
 *         userId:
 *           type: integer
 *           example: 1
 *         totalPrice:
 *           type: integer
 *           example: 0
 *         productInCarts:
 *          type: object
 *          properties:
 *            id:
 *              type: integer
 *              example: 3
 *            cartId:
 *              type: integer
 *              example: 6
 *            productId:
 *              type: integer
 *              example: 2
 *            quantity:
 *              type: integer
 *              example: 4
 *            price:
 *              type: integer
 *              example: 1500
 *            status:
 *              type: boolean
 *              example: false
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */



const Cart = db.define(
    "cart",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
},
totalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
}}
);

module.exports = Cart;