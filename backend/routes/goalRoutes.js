const express = require('express')
const router = express.Router()
const {getGoals,
     setGoal,
      updateGoal,
       deleteGoal} = require('../controllers/goalController');

const {protect} = require('../middleware/authMiddleWare')
//instead of definining the same route for different methods, we can use chaining like here.
router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)
module.exports = router