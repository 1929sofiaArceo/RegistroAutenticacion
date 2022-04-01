const router = require('express').Router();

const userRoutes = require('./../modules/users/user.routes');
const channelRoutes = require('./../modules/channels/channel.routes');
const messagesRoutes = require('../modules/messages/message.routes');
const rolesRoutes = require('./../modules/roles/role.routes');
const roomsRoutes = require('./../modules/rooms/room.routes');
const sessionRoutes = require('./../modules/sessions/session.routes');
const userGroupsRoutes = require('./../modules/usersGroups/userGroup.routes');

router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/messages', messagesRoutes);
router.use('/roles', rolesRoutes);
router.use('/rooms', roomsRoutes);
router.use('/sessions', sessionRoutes);
router.use('/usersGroups', userGroupsRoutes);

module.exports = router;