import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

export default function SimpleSnackbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose(event) {
    setOpen(false);
  }

  return (
    <div>
      <Button onClick={handleClick}>Latifa, please open snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={<span id="message-id">Thanks Latifa</span>}
        action={[
          <Button
            key="CLOSE"
            color="secondary"
            size="small"
            onClick={handleClose}
          >
            CLOSE
          </Button>,
          <IconButton
            key="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      />
    </div>
  );
}
