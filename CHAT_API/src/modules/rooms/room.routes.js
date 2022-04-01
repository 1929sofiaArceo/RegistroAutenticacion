//Middleware que ya tiene express
//los middleware se usan (use)
const router = require('express').Router();
const roomController = require('./rooms.controller');

/**
 * @swagger
 *   /api/rooms:
 *     get:
 *       tags:
 *       - Rooms
 *       description: Get all rooms
 *       responses: 
 *         200:
 *           description: Array with a list of rooms
 */
router.get('/', roomController.getAll);

/**
 * @swagger
 *   /api/rooms/{id}:
 *     get:
 *       tags:
 *       - Rooms
 *       description: Get room by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The room's unique ID
 *       responses: 
 *         200:
 *           description: room with the unique ID
 */
router.get('/:id', roomController.getById);

/**
 * @swagger
 *   /api/rooms/{id}:
 *     put:
 *       tags:
 *       - Rooms
 *       description: Update room by ID
 *       consumes:
 *         - application/json
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The room's unique ID
 *         - in: body
 *           name: room
 *           required: true
 *           description: The room info to update
 *           schema:
 *             type: object
 * 
 *       responses: 
 *         200:
 *           description: room with the unique ID
 */
 router.put('/:id', roomController.update);

/**
 * @swagger
 *   /api/rooms:
 *     post:
 *       tags:
 *       - Rooms
 *       description: JSON with the information of the room to create
 *       consumes:
 *         application/json
 *       parameters:
 *         - in: body
 *           name: room
 *           required: true
 *           description: The room to create
 *           schema:
 *             type: object
 *       responses: 
 *         200:
 *           description: room was created succesfully
 */
 router.post('/', roomController.create);



/**
 * @swagger
 *   /api/rooms/{id}:
 *     delete:
 *       tags:
 *       - Rooms
 *       description: Delete room by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The room's unique ID
 *       responses: 
 *         200:
 *           description: room deleted with the unique ID
 */
router.delete('/:id', roomController.delete);
module.exports = router;
