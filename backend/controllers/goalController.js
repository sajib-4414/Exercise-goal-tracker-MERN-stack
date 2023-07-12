const asyncHandler = require('express-async-handler')
//@desc Get goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler( async (req, res) =>{
    res.status(200).json({ message: 'Get goals'});
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

    res.status(200).json({ message: 'set Goal'});
});

//@desc Get goals
//@route PUT /api/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) =>{
    res.status(200).json({ message: `Update goals ${req.params.id}`})
});

//@desc Delete goals
//@route DELETE /api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) =>{
    res.status(200).json({ message: `Delete goals ${req.params.id}`})
});

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}