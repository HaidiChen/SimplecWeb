import { useState, KeyboardEvent } from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import HistoryZone from './HistoryZone';


function Body() {
  const [textHistory, setTextHistory] = useState<string[]>([]);
  const [text, setText] = useState("");

  function keyDownHandler(event: KeyboardEvent<HTMLElement>) {
    if (event.code === 'Enter') {
      const timedText = new Date().toLocaleString() + ": " + text;
      const copiedHistory = textHistory.slice();
      copiedHistory.push(timedText);

      setTextHistory(copiedHistory);
      setText("");
    }
  }

  return (
    <body>
      <Container>
        <TextField id="saying" label="U're saying"
                   margin="normal" fullWidth
                   value={text}
                   onKeyDown={keyDownHandler}
                   helperText="type and press 'enter' key to see your echo"
                   onChange={(event) => {
                     setText(event.target.value);
                   }}
        />

        <hr />
        <HistoryZone textHistory={textHistory} />

        <Button sx={{ marginTop: 4 }}
                variant="contained"
                onClick={() => {
                  alert("Haha, gotcha! This does nothing...");
                }}
        >
          Save the blabla... you typed or let them go!
        </Button>
      </Container>
    </body>
  );
}

export default Body;
