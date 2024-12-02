import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";




const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [userData,setUserData] = useContext(AuthContext);
  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    })

    const data = userData
    

    data.forEach(function (ele) {
      if (assignTo == ele.firstName) {
        ele.tasks.push(newTask)
        ele.taskCounts.newTask=ele.taskCounts.newTask+1 
        
      }
    })
    setUserData(data)
    console.log(data)


    setAssignTo("");
    setCategory("");
    setTaskDate("");
    setTaskTitle("");
    setTaskDescription("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between "
        action=""
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-lg text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none  bg-transparent border-[1px] border-gray-400 mb-4 mt-2"
              type="text"
              placeholder="Assign a task"
              id=""
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none  bg-transparent border-[1px] border-gray-400 mb-4 mt-2"
              type="Date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none  bg-transparent border-[1px] border-gray-400 mb-4 mt-2"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div className="text-sm text-gray-300 mb-0.5">
            <h3>Cateogery</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none  bg-transparent border-[1px] border-gray-400 mb-4 mt-2"
              type="text"
              placeholder="Desgin,Dev,Debug......"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start  ">
          <h3 className="text-sm text-gray-300 mb-0.5 ">Task Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-55 text-sm py-2 px-4 rounded outline-none bg-transparent  border-[1px] border-gray-400 mb-4 mt-2"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button
            className=" w-full hover:bg-green-700 border-none px-2 py-1 bg-emerald-400 text-black
        "
          >
            Create and Assign Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
