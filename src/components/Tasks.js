import React from "react";
import Task from "./Task";

//remember parameters? yeah, those things are used for this
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {/* task.id is the key for the component. task.text is the list of arrays we got from the const task */}
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
