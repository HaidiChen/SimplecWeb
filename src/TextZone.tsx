import { useState } from 'react';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import HistoryZone from './HistoryZone';


const MAX_HISTORY_LINES : number = 20;

function TextZone() {
  const [history, setHistory] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  return (
    <Container>
      <TextField id="saying" label="U're saying" variant="outlined"
                 margin="normal" fullWidth
                 onKeyDown={(event) => {
                   if (event.code === 'Enter') {
                     const copiedHistory = history.slice();
                     copiedHistory.push(text);
                     if (copiedHistory.length > MAX_HISTORY_LINES) {
                       setHistory(copiedHistory.slice(1, MAX_HISTORY_LINES + 1));
                     } else {
                       setHistory(copiedHistory);
                     }
                   }
                 }}
                 onChange={(event) => {
                   setText(new Date().toLocaleString() + ": " + event.target.value);
                 }}
      />

      <HistoryZone textHistory={history} />
    </Container>
  );
}

export default TextZone;
