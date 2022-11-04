const Goal = require("../models/goalModel");

const asyncHandler = require("express-async-handler");
//@desc get goals
//@route GET /api/goals
//@access PRIVATE
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

//@desc add goals
//@route POST /api/goals
//@access PRIVATE
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }

  const goal = await Goal.create({ text: req.body.text });
  res.status(200).json(goal);
});

//@desc update goal
//@route PUT /api/goals/:id
//@access PRIVATE
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

//@desc delete goal
//@route DELETE /api/goals/:id
//@access PRIVATE
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("goal not found");
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
