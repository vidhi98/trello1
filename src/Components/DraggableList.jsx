import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useRef, useState } from "react";
import DraggableCard from "../Components/DraggableCard";
import useListData from "../data/ListDataProvider/useListData";

const DraggableList = ({ title, index }) => {
  const [taskName, setTaskName] = useState("");

  const [showInput, setShowInput] = useState(false);

  const { addTask, tasks, reorderTasks } = useListData();

  const draggingItem = useRef();
  const dragOverItem = useRef();

  const handleInpuChange = (e) => {
    setTaskName(e.target.value);
  };
  const toggleInput = () => {
    setShowInput(true);
  };
  const allowDrag = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    const data = e.dataTransfer.getData("text/html");
    // const data = draggingItem.current;
    console.log(
      "data",
      draggingItem.current,
      data,
      e.target,
      document.getElementById(data)
    );
    setTimeout(() => e.target.appendChild(document.getElementById(data)), 150);
  };

  const handleDragStart = (e, position) => {
    draggingItem.current = position;
    e.dataTransfer.setData("text/html", e.target.id);
  };
  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
  };
  const handleDragEnd = (e) => {
    const listCopy = [...tasks];
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = null;
    dragOverItem.current = null;
    reorderTasks(listCopy);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskName.length > 0) {
      const obj = {
        name: taskName,
        category: title,
      };
      addTask(obj);
      setShowInput(false);
      setTaskName("");
    }
  };

  return (
    <div>
      <Card variant="outlined">
        <div
          style={{
            minHeight: "280px",
          }}
          onDrop={handleDrop}
          onDragOver={allowDrag}
        >
          <CardContent>
            <div>
              <Typography color="primary" variant="h5" align="center">
                {title}
              </Typography>
            </div>
            <div
              onDrop={handleDrop}
              onDragOver={allowDrag}
              style={{
                minHeight: "200px",
                padding: "40px 0 80px",
              }}
            >
              {tasks.map((task, index) => (
                <div key={index}>
                  {task.category === title ? (
                    <DraggableCard
                      name={task.name}
                      index={index}
                      handleDragEnd={handleDragEnd}
                      handleDragStart={handleDragStart}
                      handleDragEnter={handleDragEnter}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
            <div>
              {showInput ? (
                <form onSubmit={handleAddTask}>
                  <TextField
                    name="taskName"
                    variant="outlined"
                    onChange={handleInpuChange}
                    value={taskName}
                    autoFocus
                  />
                </form>
              ) : (
                <Button
                  fullWidth
                  color="primary"
                  variant="contained"
                  onClick={toggleInput}
                  size="large"
                >
                  Add task
                </Button>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default DraggableList;
