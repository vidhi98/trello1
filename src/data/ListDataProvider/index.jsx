import React, { useState } from "react";
import ListDataContext from "./ListDataContext";

const initialTasks = [
  { name: "Learn Angular", category: "TO DO" },
  { name: "Learn React", category: "IN Progress" },
  { name: "Learn Vue", category: "DONE" },
  { name: "Learn Jira", category: "TO DO" },
  { name: "Learn Trello", category: "IN Progress" },
  { name: "PWA", category: "DONE" },
];

const list = ["TO DO", "In Progress"];
// const list = [];

const ListDataProvider = ({ children }) => {
  const [statusList, setStatusList] = useState(list);
  const [tasks, setTasks] = useState(initialTasks);

  const addStatus = (title) => {
    setStatusList((prevList) => [...prevList, title]);
  };
  const addTask = (obj) => {
    console.log("adddddd task", obj);
    setTasks((prevTasks) => [...prevTasks, obj]);
  };
  const reorderTasks = (taskList) => {
    setTasks(taskList);
  };

  const reorderStatusList = (newList) => {
    setStatusList(newList);
  };

  const listData = {
    statusList,
    tasks,
    addStatus,
    addTask,
    reorderTasks,
    reorderStatusList,
  };

  return (
    <ListDataContext.Provider value={listData}>
      {children}
    </ListDataContext.Provider>
  );
};

export default ListDataProvider;
