const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel')
//@desc Get goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler( async (req, res) =>{
    const goals = await Goal.find({ user: req.user.id})
    res.status(200).json(goals);
});

//@desc Set goals
//@route POST /api/goals
//@access Private
const setGoal = asyncHandler(async (req, res) =>{
    //if no body is sent
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400);
        throw new Error('Please add a text field');
      }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })

    res.status(200).json(goal);
});

//@desc Get goals
//@route PUT /api/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) =>{
    const goal = await Goal.findById(req.params.id)

    if (!goal){
        res.status(400)
        throw new Error('Goal Not found')
    }


    //check for user
    if(!req.user){
        res.status(401)
        throw new Error('user not found')
    }

    //make sure logged in user matches the goal user
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('user not autorized')

    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedGoal)
});

//@desc Delete goals
//@route DELETE /api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) =>{
    const goal = await Goal.findById(req.params.id)

    if (!goal){
        res.status(400)
        throw new Error('Goal Not found')
    }


    //check for user
    if(!req.user){
        res.status(401)
        throw new Error('user not found')
    }

    //make sure logged in user matches the goal user
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('user not autorized')

    }
    
    await Goal.findByIdAndRemove(req.params.id)
    res.status(200).json({ id: req.params.id })
});

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}