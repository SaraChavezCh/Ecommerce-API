const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     order:
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
 *         status:
 *           type: boolean
 *           example: true
 *     purchase:
 *       type: object
 *       properties:
 *         orderId:
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
 *     getAllPurchases:
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
 *         productInOrders:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               example: 3
 *             orderIdId:
 *               type: integer
 *               example: 6
 *             productId:
 *               type: integer
 *               example: 2
 *             quantity:
 *               type: integer
 *               example: 4
 *             price:
 *               type: integer
 *               example: 1500
 *             status:
 *               type: boolean
 *               example: false
 *          required:
 *             - userId
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

const Order = db.define(
    "order",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
        totalPrice:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "user_id"
        },
        status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        }
    }
);

module.exports = Order;