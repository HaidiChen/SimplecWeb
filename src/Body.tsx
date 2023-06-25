import { useState } from 'react';

import Container from '@mui/material/Container';

import ActionZone from './ActionZone';
import HistoryZone from './HistoryZone';
import TextZone from './TextZone';


function Body() {
  const [textHistory, setTextHistory] = useState<string[]>([]);

  return (
    <body>
      <Container>
        <TextZone textHistory={textHistory} onHistoryChange={setTextHistory} />

        <hr />

        <HistoryZone textHistory={textHistory} />

        <ActionZone />
      </Container>
    </body>
  );
}

export default Body;
