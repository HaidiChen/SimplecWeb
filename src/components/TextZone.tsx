import { useState, KeyboardEvent } from 'react';

import TextField from '@mui/material/TextField';


interface TextZoneProperty {
  readonly blablaLines : string[],
  readonly handleBlablaLines : any,
}

function TextZone(props : TextZoneProperty) {
  const [text, setText] = useState("");

  function keyDownHandler(event: KeyboardEvent<HTMLElement>) {
    if (event.code === 'Enter') {
      const line = new Date().toLocaleString() + ": " + text;
      const newBlablaLines = props.blablaLines.slice();
      newBlablaLines.push(line);

      props.handleBlablaLines(newBlablaLines);
      setText("");
    }
  }

  return (
    <TextField label="U're saying" margin="normal" fullWidth
               helperText="type and press 'enter' key to see your echo"
               value={text} onKeyDown={keyDownHandler}
               onChange={(event) => setText(event.target.value)}
    />
  );
}

export default TextZone;
