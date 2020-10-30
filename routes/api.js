// need to build this file
const router = require("express").Router();
const Workout = require("../models/workout")
const db = require("./models/")


router.get("/api/workouts", (req, res) => {
    console.log("getting workouts route")
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})

router.post("/api/workouts", (req, res) => {
    console.log("posting workouts route")
    db.Workout.create({})
    .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// router.put("/api/workouts/:id", (req, res) => {
//     console.log(req.body);
//     db.Workout.insert(req.body, (error, data) => {
//         if (error) {
//           res.send(error);
//         } else {
//           res.send(data);
//         }
//       });
// })

// router.put("/api/workouts", (req, res) => {
//     console.log("update workouts route")
//     db.Workout.update({})
// })

module.exports = router;
