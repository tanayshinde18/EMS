import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const Tasklist = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto flex items-center justify-start gap-5 flex-nowrap  py-5 mt-10 h-[55%] w-full"
    >
      {data.tasks.map((ele, idx) => {
        // console.log(ele)

        if (ele.active === true) {
          return <AcceptTask key={idx} data={ele} />;
        }

        if (ele.newTask) {
          return <NewTask key={idx} data={ele} />;
        }

        if (ele.completed) {
          return <CompleteTask key={idx} data={ele} />;
        }

        if (ele.failed) {
          return <FailedTask key={idx} data={ele} />;
        }
      })}

      {/* <AcceptTask />
      <NewTask />

      <CompleteTask />
      <FailedTask /> */}
    </div>
  );
};

export default Tasklist;
