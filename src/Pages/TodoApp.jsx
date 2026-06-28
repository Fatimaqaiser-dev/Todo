import React, { useState, useEffect } from "react";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));

    if (selectedTask === id) {
      setSelectedTask(null);
    }
  };

  const completeTask = () => {
    if (!selectedTask) return;

    setTasks(
      tasks.map((task) =>
        task.id === selectedTask
          ? { ...task, completed: true }
          : task
      )
    );

    setSelectedTask(null);
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-4">

        <h1 className="text-2xl font-bold text-center mb-4">
          📝 My To-Do List
        </h1>

        <TodoInput
          task={task}
          setTask={setTask}
          addTask={addTask}
        />

        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
        />

        <div className="flex gap-2 mt-4">
          <button
            onClick={completeTask}
            className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-600"
          >
            ✓ Complete
          </button>

          <button
            onClick={() => setTasks([])}
            className="flex-1 bg-red-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-600"
          >
            Delete All
          </button>
        </div>

        <div className="mt-4 text-center text-sm text-gray-600">
          Total: {tasks.length} | Completed: {completedTasks} |
          Incomplete: {tasks.length - completedTasks}
        </div>

      </div>
    </div>
  );
};

export default TodoApp;