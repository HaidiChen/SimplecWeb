import TextField from '@mui/material/TextField';


interface HistoryZoneProperty {
  readonly textHistory : string[],
}

function HistoryZone(props : HistoryZoneProperty) {

  return (
    <TextField fullWidth multiline inputProps={{ readOnly: true }}
               value={props.textHistory.slice().reverse().join("\n")}
               maxRows={20} label="Here's what you said"
               variant="filled"
    />
  );
}

export default HistoryZone;
