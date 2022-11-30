const {Router} = require ('express');
const authenticate = require ('../middlewares/auth.middleware');
const { addToCart, getAllProductsInCart } = require('../controllers');

const router = Router ();

/**
 * @openapi
 * /api/v1/cart/{userId}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Add  product to cart 
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         require: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: userId
 *     requestBody:
 *       description: To add a product to the cart you need the quantity and the productId
 *       content:
 *         application/json:
 *           schema:
 *             type:
 *             $ref: "#/components/schemas/addToCart"
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/newProductInCart"
 * /api/v1/cart/products/{userId}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all products in cart 
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         require: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/getAllProductsInCart"
 */

router.post('/cart/:userId',authenticate, addToCart);
router.get('/cart/products/:userId',authenticate, getAllProductsInCart);


module.exports = router;