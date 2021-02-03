const trackercontainer = require('../controllers/trackercontainer.controller');
const  express = require('express');
const trackercontainerroute = express.Router();
trackercontainerroute.post("/:userid/createcontainer",trackercontainer.create);
trackercontainerroute.get("/:userid/getcontainers",trackercontainer.findAllContainersRelatedToUser);
trackercontainerroute.get("/:userid/:trackercontainerid",trackercontainer.findOne);
trackercontainerroute.post("/:userid/:trackercontainerid/addusers",trackercontainer.joinTrackerContainer);
trackercontainerroute.post("/:userid/updatecontainer",trackercontainer.update);
trackercontainerroute.delete("/:userid/deletetrackercontainer",trackercontainer.deleteTCandCCandTRandTCR);
module.exports =  trackercontainerroute;