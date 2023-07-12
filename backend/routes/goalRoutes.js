const express = require('express')
const router = express.Router()
const {getGoals,
     setGoal,
      updateGoal,
       deleteGoal} = require('../controllers/goalController');
//instead of definining the same route for different methods, we can use chaining like here.
router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)
module.exports = router