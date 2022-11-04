const asyncHandler = require("express-async-handler");
//@desc get goals
//@route GET /api/goals
//@access PRIVATE
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

//@desc add goals
//@route POST /api/goals
//@access PRIVATE
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }
  res.status(200).json({ message: "Set Goal" });
});

//@desc update goal
//@route PUT /api/goals/:id
//@access PRIVATE
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
});

//@desc delete goal
//@route DELETE /api/goals/:id
//@access PRIVATE
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};