import { useState, KeyboardEvent } from 'react';

import TextField from '@mui/material/TextField';


interface TextZoneProperty {
  readonly textHistory : string[],
  readonly onHistoryChange : any,
}

function TextZone(props : TextZoneProperty) {
  const [text, setText] = useState("");

  function keyDownHandler(event: KeyboardEvent<HTMLElement>) {
    if (event.code === 'Enter') {
      const timedText = new Date().toLocaleString() + ": " + text;
      const newHistory = props.textHistory.slice();
      newHistory.push(timedText);

      props.onHistoryChange(newHistory);
      setText("");
    }
  }

  return (
    <TextField id="saying" label="U're saying"
               margin="normal" fullWidth
               value={text}
               onKeyDown={keyDownHandler}
               helperText="type and press 'enter' key to see your echo"
               onChange={(event) => {
                 setText(event.target.value);
               }}
    />
  );
}

export default TextZone;
