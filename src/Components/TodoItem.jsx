import React from "react";

const TodoItem = ({
  task,
  deleteTask,
  selectedTask,
  setSelectedTask,
}) => {
  return (
    <li className="flex items-center justify-between p-3 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="selectedTask"
          checked={selectedTask === task.id}
          onChange={() => setSelectedTask(task.id)}
          className="w-4 h-4"
        />

        <span
          className={`text-sm ${
            task.completed
              ? "line-through text-gray-400"
              : "text-gray-800"
          }`}
        >
          {task.text}
        </span>
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;