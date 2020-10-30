// need to build this file
const router = require("express").Router();
// const Workout = require("../models/workout")
const db = require("../models/")

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})

router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
      {
        $push: {
            exercises: body
        }
      },
      { new: true, runValidators: true }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
});

router.delete("/api/workouts", ({ body }, res) => {
   db.Workout.findByIdAndDelete(body.id)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
});

module.exports = router;
