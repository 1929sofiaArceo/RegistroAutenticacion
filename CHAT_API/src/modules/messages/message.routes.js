//Middleware que ya tiene express
//los middleware se usan (use)
const router = require('express').Router();
const messageController = require('./messages.controller');

/**
 * @swagger
 *   /api/messages:
 *     get:
 *       tags:
 *       - Messages
 *       description: Get all messages
 *       responses: 
 *         200:
 *           description: Array with a list of messages
 */
router.get('/', messageController.getAll);

/**
 * @swagger
 *   /api/messages/{id}:
 *     get:
 *       tags:
 *       - Messages
 *       description: Get message by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The message's unique ID
 *       responses: 
 *         200:
 *           description: message with the unique ID
 */
router.get('/:id', messageController.getById);

/**
 * @swagger
 *   /api/messages/{id}:
 *     put:
 *       tags:
 *       - Messages
 *       description: Update message by ID
 *       consumes:
 *         - application/json
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The message's unique ID
 *         - in: body
 *           name: message
 *           required: true
 *           description: The message info to update
 *           schema:
 *             type: object
 * 
 *       responses: 
 *         200:
 *           description: message with the unique ID
 */
 router.put('/:id', messageController.update);

/**
 * @swagger
 *   /api/messages:
 *     post:
 *       tags:
 *       - Messages
 *       description: JSON with the information of the message to create
 *       consumes:
 *         application/json
 *       parameters:
 *         - in: body
 *           name: message
 *           required: true
 *           description: The message to create
 *           schema:
 *             type: object
 *       responses: 
 *         200:
 *           description: message was created succesfully
 */
 router.post('/', messageController.create);



/**
 * @swagger
 *   /api/messages/{id}:
 *     delete:
 *       tags:
 *       - Messages
 *       description: Delete message by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The message's unique ID
 *       responses: 
 *         200:
 *           description: message deleted with the unique ID
 */
router.delete('/:id', messageController.delete);

module.exports = router;
