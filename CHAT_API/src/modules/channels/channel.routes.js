//Middleware que ya tiene express
//los middleware se usan (use)
const router = require('express').Router();
const channelController = require('./channels.controller');

/**
 * @swagger
 *   /api/channels:
 *     get:
 *       tags:
 *       - Channels
 *       description: Get all channels
 *       responses: 
 *         200:
 *           description: Array with a list of channels
 */
router.get('/', channelController.getAll);

/**
 * @swagger
 *   /api/channels/{id}:
 *     get:
 *       tags:
 *       - Channels
 *       description: Get channel by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The channel's unique ID
 *       responses: 
 *         200:
 *           description: channel with the unique ID
 */
router.get('/:id', channelController.getById);

/**
 * @swagger
 *   /api/channels/{id}:
 *     put:
 *       tags:
 *       - Channels
 *       description: Update channel by ID
 *       consumes:
 *         - application/json
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The channel's unique ID
 *         - in: body
 *           name: channel
 *           required: true
 *           description: The channel info to update
 *           schema:
 *             type: object
 * 
 *       responses: 
 *         200:
 *           description: channel with the unique ID
 */
 router.put('/:id', channelController.update);

/**
 * @swagger
 *   /api/channels:
 *     post:
 *       tags:
 *       - Channels
 *       description: JSON with the information of the channel to create
 *       consumes:
 *         application/json
 *       parameters:
 *         - in: body
 *           name: channel
 *           required: true
 *           description: The channel to create
 *           schema:
 *             type: object
 *       responses: 
 *         200:
 *           description: channel was created succesfully
 */
 router.post('/', channelController.create);



/**
 * @swagger
 *   /api/channels/{id}:
 *     delete:
 *       tags:
 *       - Channels
 *       description: Delete channel by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The channel's unique ID
 *       responses: 
 *         200:
 *           description: channel deleted with the unique ID
 */
router.delete('/:id', channelController.delete);

module.exports = router;
