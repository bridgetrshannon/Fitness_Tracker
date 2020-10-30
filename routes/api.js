// need to build this file
const router = require("express").Router();
const Workout = require("../models/workout")


router.get("/api/workouts", (req, res) => {
    console.log("getting workouts route")
    Workout.find({})
})

router.post("/api/workouts", (req, res) => {
    console.log("posting workouts route")
    Workout.create({})
})

router.get("/api/exercise", (req, res) => {
    console.log("getting exercise route")
    Exercise.find({})
})

router.post("/api/exercise", (req, res) => {
    console.log("posting exercise route")
    Exercise.create({})
})

// add workout
// router.post("/api/exercise", ({ body }, res) => {
//     Workout.create(body)
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });
//   createWorkout();
  
// //   finds / displays workouts
//   router.get("/api/workouts", (req, res) => {
//     Workout.find({})
//       .sort({ date: -1 })
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

//   function for displaying last workout 
//   getLastWorkout();
  
module.exports = router;