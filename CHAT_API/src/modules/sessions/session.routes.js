//Middleware que ya tiene express
//los middleware se usan (use)
const router = require('express').Router();
const sessionController = require('./sessions.controller');

/**
 * @swagger
 *   /api/sessions:
 *     get:
 *       tags:
 *       - Sessions
 *       description: Get all sessions
 *       responses: 
 *         200:
 *           description: Array with a list of sessions
 */
router.get('/', sessionController.getAll);

/**
 * @swagger
 *   /api/sessions/{id}:
 *     get:
 *       tags:
 *       - Sessions
 *       description: Get session by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The session's unique ID
 *       responses: 
 *         200:
 *           description: session with the unique ID
 */
router.get('/:id', sessionController.getById);

/**
 * @swagger
 *   /api/sessions/{id}:
 *     put:
 *       tags:
 *       - Sessions
 *       description: Update session by ID
 *       consumes:
 *         - application/json
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The session's unique ID
 *         - in: body
 *           name: session
 *           required: true
 *           description: The session info to update
 *           schema:
 *             type: object
 * 
 *       responses: 
 *         200:
 *           description: session with the unique ID
 */
 router.put('/:id', sessionController.update);

/**
 * @swagger
 *   /api/sessions:
 *     post:
 *       tags:
 *       - Sessions
 *       description: JSON with the information of the session to create
 *       consumes:
 *         application/json
 *       parameters:
 *         - in: body
 *           name: session
 *           required: true
 *           description: The session to create
 *           schema:
 *             type: object
 *       responses: 
 *         200:
 *           description: session was created succesfully
 */
 router.post('/', sessionController.create);



/**
 * @swagger
 *   /api/sessions/{id}:
 *     delete:
 *       tags:
 *       - Sessions
 *       description: Delete session by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The session's unique ID
 *       responses: 
 *         200:
 *           description: session deleted with the unique ID
 */
router.delete('/:id', sessionController.delete);
module.exports = router;
