import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  tasks,
  deleteTask,
  selectedTask,
  setSelectedTask,
}) => {
  return (
    <ul className="mt-6 border-2 border-gray-200 rounded-xl overflow-hidden bg-white">
      {tasks.length === 0 ? (
        <li className="p-4 text-center text-gray-500">
          No tasks yet 🚀
        </li>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;