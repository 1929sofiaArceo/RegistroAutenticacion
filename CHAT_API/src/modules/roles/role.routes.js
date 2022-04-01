//Middleware que ya tiene express
//los middleware se usan (use)
const router = require('express').Router();
const roleController = require('./roles.controller');

/**
 * @swagger
 *   /api/roles:
 *     get:
 *       tags:
 *       - Roles
 *       description: Get all roles
 *       responses: 
 *         200:
 *           description: Array with a list of roles
 */
router.get('/', roleController.getAll);

/**
 * @swagger
 *   /api/roles/{id}:
 *     get:
 *       tags:
 *       - Roles
 *       description: Get role by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The role's unique ID
 *       responses: 
 *         200:
 *           description: role with the unique ID
 */
router.get('/:id', roleController.getById);

/**
 * @swagger
 *   /api/roles/{id}:
 *     put:
 *       tags:
 *       - Roles
 *       description: Update role by ID
 *       consumes:
 *         - application/json
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The role's unique ID
 *         - in: body
 *           name: role
 *           required: true
 *           description: The role info to update
 *           schema:
 *             type: object
 * 
 *       responses: 
 *         200:
 *           description: role with the unique ID
 */
 router.put('/:id', roleController.update);

/**
 * @swagger
 *   /api/roles:
 *     post:
 *       tags:
 *       - Roles
 *       description: JSON with the information of the role to create
 *       consumes:
 *         application/json
 *       parameters:
 *         - in: body
 *           name: role
 *           required: true
 *           description: The role to create
 *           schema:
 *             type: object
 *       responses: 
 *         200:
 *           description: role was created succesfully
 */
 router.post('/', roleController.create);



/**
 * @swagger
 *   /api/roles/{id}:
 *     delete:
 *       tags:
 *       - Roles
 *       description: Delete role by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The role's unique ID
 *       responses: 
 *         200:
 *           description: role deleted with the unique ID
 */
router.delete('/:id', roleController.delete);
module.exports = router;
