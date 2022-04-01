//Middleware que ya tiene express
//los middleware se usan (use)
const router = require('express').Router();
const userGroupController = require('./usersGroups.controller');

/**
 * @swagger
 *   /api/usersGroups:
 *     get:
 *       tags:
 *       - usersGroups
 *       description: Get all usersGroups
 *       responses: 
 *         200:
 *           description: Array with a list of usersGroups
 */
router.get('/', userGroupController.getAll);

/**
 * @swagger
 *   /api/usersGroups/{id}:
 *     get:
 *       tags:
 *       - usersGroups
 *       description: Get userGroup by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The userGroup's unique ID
 *       responses: 
 *         200:
 *           description: userGroup with the unique ID
 */
router.get('/:id', userGroupController.getById);

/**
 * @swagger
 *   /api/usersGroups/{id}:
 *     put:
 *       tags:
 *       - usersGroups
 *       description: Update userGroup by ID
 *       consumes:
 *         - application/json
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The userGroup's unique ID
 *         - in: body
 *           name: userGroup
 *           required: true
 *           description: The userGroup info to update
 *           schema:
 *             type: object
 * 
 *       responses: 
 *         200:
 *           description: userGroup with the unique ID
 */
 router.put('/:id', userGroupController.update);

/**
 * @swagger
 *   /api/usersGroups:
 *     post:
 *       tags:
 *       - usersGroups
 *       description: JSON with the information of the userGroup to create
 *       consumes:
 *         application/json
 *       parameters:
 *         - in: body
 *           name: userGroup
 *           required: true
 *           description: The userGroup to create
 *           schema:
 *             type: object
 *       responses: 
 *         200:
 *           description: userGroup was created succesfully
 */
 router.post('/', userGroupController.create);



/**
 * @swagger
 *   /api/usersGroups/{id}:
 *     delete:
 *       tags:
 *       - usersGroups
 *       description: Delete userGroup by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The userGroup's unique ID
 *       responses: 
 *         200:
 *           description: userGroup deleted with the unique ID
 */
router.delete('/:id', userGroupController.delete);
module.exports = router;
