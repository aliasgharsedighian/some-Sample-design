import React, { useEffect } from "react";
import { useState } from "react";

function Test({ taskArray, setTaskArray }) {
  useEffect(() => {
    console.log(taskArray);
  }, []);
  return (
    <div>
      <input type={"button"} value={"Clear completed tasks"} />
      {taskArray.map((obj) => (
        <>
          <p>{obj.task}</p>
          <div style={{ marginLeft: 20 }}>
            {obj.subtasks.map((subtask) => (
              <p>{subtask}</p>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default Test;
