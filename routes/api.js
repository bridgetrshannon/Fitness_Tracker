// need to build this file
const router = require("express").Router();
const Workout = require("../models/workout")
const db = require("../models/")
const mongojs = require("mongojs");


router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});


router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
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

// router.put("/api/workouts/:id", ({ body, params }, res) => {
//     Workout.updateOne(
//       {
//         _id: mongojs.ObjectId(params.id)
//       },
//       {
//         $set: {
//             exercises: body
//         }
//       },
  
//       (error, edited) => {
//         if (error) {
//           console.log(error);
//           res.send(error);
//         } else {
//           console.log(edited);
//           res.send(edited);
//         }
//       }
//     );
//   });

  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})

module.exports = router;
