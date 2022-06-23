import React from "react";
import { FaTimes } from "react-icons/fa";
import {FaEdit} from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    //you needed to bring in task.id to pass in ... noselect has been added to decrease text highlight selection.
    <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(task.id)}//calls function and then passed in ontoggle as a prop
    >
      <p className="noselect  text-xs text-gray-400">{task.day}</p>
      <h3 className="noselect display-linebreak">
        {task.text}{' '}
        
        <div className="flex">
        <FaEdit onClick={()=> console.log("pop up of a text box that changes the data withing the text.")} />
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
          //this changes it from taking every parameter to just task.id
        /></div>
      </h3>

    </div> //onDelete={deleteTask} passes in everything. changing it to onclick
  );
};

export default Task;
