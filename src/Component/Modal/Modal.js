import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Add(handleAdd) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <label>name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label>type:</label>
        <input type="text" onChange={(e) => setType(e.target.value)} />
        <label>description:</label>
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
        <label>image:</label>
        <input type="text" onChange={(e) => setImage(e.target.value)} />
        <label>date:</label>
        <input type="text" onChange={(e) => setDate(e.target.value)} />
        <label>rating:</label>
        <input type="number" onChange={(e) => setRating(e.target.value)} />

        <button
          onClick={() =>
            handleAdd(name, type, description, image, date, rating)
          }
        >
          Add
        </button>
      </div>
      <Add />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={() => handleOpen(true)}>
        Add
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
