import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goal/goalSlice";

const GoalForm = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text }));
    navigate("/");
  };
  return (
    <>
      <section className="group">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text">Goal</label>
            <input
              type="text"
              id="text"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Add Goal
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default GoalForm;
