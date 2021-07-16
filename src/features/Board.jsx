import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import DraggableList from "../Components/DraggableList";
import useListData from "../data/ListDataProvider/useListData";

const Board = () => {
  const [listName, setListName] = useState("");

  const [showInput, setShowInput] = useState(false);
  const { statusList, tasks, addStatus } = useListData();

  const handleInputChange = (e) => {
    setListName(e.target.value);
  };
  const toggleInput = () => {
    setShowInput(true);
  };

  const handleAddList = (e) => {
    e.preventDefault();
    addStatus(listName);
    setShowInput(false);
    setListName("");
  };

  return (
    <Grid container spacing={2}>
      {statusList.map((item, index) => {
        return (
          <Grid item xs={2} key={index}>
            <DraggableList title={item} index={index} tasks={tasks} />
          </Grid>
        );
      })}
      <Grid item xs={2}>
        {showInput ? (
          <form onSubmit={handleAddList}>
            <TextField
              variant="outlined"
              onChange={handleInputChange}
              value={listName}
              name="listName"
              placeholder="Add List"
            />
          </form>
        ) : (
          <Button
            variant="contained"
            fullWidth
            color="inherit"
            size="large"
            onClick={toggleInput}
          >
            Add List
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default Board;
