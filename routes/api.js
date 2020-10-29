// need to build this file

const router = require("express").Router();
const Workout = require("../models/workout")


router.post("/api/workouts", (req, res) => {
    Workout.create({})
})

module.exports = router;