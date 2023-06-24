import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


interface HistoryZoneProperty {
  readonly textHistory : string[],
}

function HistoryZone(props : HistoryZoneProperty) {

  const renderedTextHistory = props.textHistory.map((line : string) => {
    return (
      <ListItem disablePadding>
        <ListItemText primary={line} />
      </ListItem>
    );
  });

  return (
      <List>{renderedTextHistory}</List>
  );
}

export default HistoryZone;
