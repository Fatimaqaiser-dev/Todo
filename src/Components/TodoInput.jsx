import React from "react";

const TodoInput = ({ task, setTask, addTask }) => {
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
        placeholder="Enter task..."
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-teal-500"
      />

      <button
        onClick={addTask}
        className="w-full mt-3 bg-teal-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition"
      >
        + Add Task
      </button>
    </div>
  );
};

export default TodoInput;