import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div className="bg-teal-50 p-5 drop-shadow-lg shadow-sm rounded-lg max-w-[30vw]">
      <h1
        className="text-3xl text-center text-emerald-300 font-bold"
        style={{ fontFamily: "Poppins" }}
      >
        TodoList
      </h1>

      <form
        className="mt-3 flex gap-3 justify-between w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-[70%] px-6 py-2 rounded-md drop-shadow-lg shadow-sm placeholder:gray-400
          focus:ring-1 focus:ring-emerald-300 focus:outline-none"
          placeholder="Add a task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="w-[30%] bg-teal-200 text-emerald-600 px-3 py-1 rounded-full shadow-sm drop-shadow-md hover:bg-gradient-to-br hover:from-emerald-300 hover:to-teal-500 hover:text-white hover:scale-110 transition-all ease-in-out duration-300">
          Add Task
        </button>
      </form>
      <h2
        className="text-xl underline mt-8 text-lime-600 font-bold"
        style={{ fontFamily: "Poppins" }}
      >
        {tasks.length === 0 ? "No tasks available" : "Tasks"}
      </h2>
      <ul className="mt-5 inline-flex justify-center items-center flex-col gap-3 w-full">
        {tasks.map((task, index) => (
          <div className="flex w-full justify-start items-start" key={index}>
            <li className="bg-white rounded-md shadow-sm uppercase text-md font-bold drop-shadow-md text-lime-600 w-full px-4 py-3">
              {task}
            </li>
            <button
              className="bg-red-500 text-white px-2 py-3 rounded-md shadow-sm drop-shadow-md ml-3 hover:bg-red-600 transition-all ease-in-out duration-300 w-[30%]"
              onClick={() => {
                setTasks(tasks.filter((t) => t !== task));
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
