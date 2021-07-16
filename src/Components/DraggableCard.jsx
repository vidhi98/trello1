import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
} from "@material-ui/core";
import React from "react";

const DraggableCard = ({
  name,
  index,
  handleDragStart,
  handleDragEnd,
  handleDragEnter,
}) => {
  // const handleDrag = (e) => {
  //   e.dataTransfer.setData("text/html", e.target.id);
  // };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        style={{
          background: "lightblue",
          minHeight: "40px",
          padding: "10px",
          margin: "10px 0",
        }}
        draggable="true"
        onDragOver={handleDragOver}
        onDragStart={(e) => handleDragStart(e, index)}
        onDragEnter={(e) => handleDragEnter(e, index)}
        onDragEnd={handleDragEnd}
        key={`draggableCard${name}`}
        id={`draggableCard${name}`}
        onClick={handleClickOpen}
      >
        <Typography id={`draggableCard${name}`}>{name}</Typography>
      </div>

      {/* Dialog Starts here, wil be shifted to other component */}

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {name}
        </DialogTitle>
        <DialogContent dividers>
          <Box py={2} maxWidth="100%">
            <Typography>Task</Typography>
            <TextField variant="outlined" placeholder="Task Name" />
          </Box>

          <Box py={2} maxWidth="100%">
            <Typography>Reporter</Typography>
            <TextField variant="outlined" placeholder="Reporter" />
          </Box>

          <Box py={2} maxWidth="100%">
            <Typography>Description</Typography>
            <TextField
              variant="outlined"
              placeholder="Description"
              multiline
              rows={3}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DraggableCard;
