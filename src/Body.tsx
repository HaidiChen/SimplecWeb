import { useState } from 'react';

import Container from '@mui/material/Container';

import ActionZone from './components/ActionZone';
import DisplayZone from './components/DisplayZone';
import TextZone from './components/TextZone';


function Body() {
  const [blablaLines, setBlablaLines] = useState<string[]>([]);

  return (
    <body>
      <Container>
        <TextZone blablaLines={blablaLines} handleBlablaLines={setBlablaLines} />

        <DisplayZone blablaLines={blablaLines} sx={{ marginTop: 2 }} />

        <ActionZone handleBlablaLines={setBlablaLines} blablaLines={blablaLines} />
      </Container>
    </body>
  );
}

export default Body;
