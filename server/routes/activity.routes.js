const router = require("express").Router();
const mongoose = require("mongoose");
const Activity = require("../models/Activity.model");

// Create activity
router.post('/activities', (req, res) => {
    const { type, time, user, pitch } = req.body;

    Activity.create({ type, time, user, pitch })
    .then(response => res.json(response))
    .catch(err => res.json(err))
});

// Return activities
router.get('/activities', (req, res) => {

    Activity.find()
    .then(activities => res.json(activities))
    .catch(err => console.log(err))
});

// Return specific activity
router.get('/activities/:activityId', (req, res) => {
    const { activityId } = req.params;

    Activity.findById(activityId)
      .then((foundActivity) => res.json(foundActivity))
      .catch((err) => console.log(err));
  });

// Edit specific activity
router.put('/activities/:activityId', (req, res) => {
    const {activityId} = req.params;
    const {type, time, user, pitch} = req.body;

    Activity.findByIdAndUpdate(activityId, {type, time, user, pitch}, {new: true})
    .then(updatedActivity => res.json(updatedActivity))
    .catch(err => console.log(err))
})

// Delete specified activity
router.delete('/activities/:activityId', (req, res) => {
    const {activityId} = req.params;

    Activity.findByIdAndDelete(activityId)
    .then(deletedActivity => res.json(deletedActivity))
    .catch(err => console.log(err))
})

module.exports = router;