import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../Other/TaskListNumber";
import Tasklist from "../TaskList/Tasklist";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-slate-700 h-screen ">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumber data={props.data} />
      <Tasklist data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
