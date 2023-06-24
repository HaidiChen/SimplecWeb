import React from 'react';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


function TextZone() {
  return (
    <Container>
      <TextField id="saying" label="U're saying" variant="outlined" margin="normal" fullWidth />
      <List>
        <ListItem disablePadding>
          <ListItemText primary="1 : Here's what you said" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="2 : That's good" />
        </ListItem>
      </List>
    </Container>
  );
}

export default TextZone;
