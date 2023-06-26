import { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import { getBlablas, API_CALL_ERROR } from '../services/Simplecs';


interface BlablaLinesLoaderProperty {
  readonly sx : object,
  readonly handleLoad : any,
}

function BlablaLinesLoader(props : BlablaLinesLoaderProperty) {

  const [open, setOpen] = useState(false);
  const [blablaId, setBlablaId] = useState("");

  function loadBlablas() {
    if (blablaId === null || blablaId.length <= 0) {
      alert("Hey, where's your id?");
      return;
    }

    getBlablas(blablaId).then((blablas) => {
      if (blablas === API_CALL_ERROR) {
        alert("Something wrong with getting your blabla ...");
      } else if (blablas.lines.length <= 0) {
        alert("Nothing for the provided id!");
      } else {
        props.handleLoad(blablas.lines);
      }
    });

    setOpen(false);
    setBlablaId("");
  }

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)} sx={props.sx} >
        Load your blabla ...
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Retrieve Your Blabla</DialogTitle>

        <DialogContent>
          <DialogContentText>
            To get your blabla back, enter the id generated for you.
          </DialogContentText>

          <TextField autoFocus margin="dense" value={blablaId}
                     label="Your blabla id" fullWidth variant="standard"
                     onChange={(event) => setBlablaId(event.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => {setOpen(false); setBlablaId("");}}>Cancel</Button>
          <Button onClick={loadBlablas}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default BlablaLinesLoader;
