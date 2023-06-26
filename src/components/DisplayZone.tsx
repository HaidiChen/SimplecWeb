import TextField from '@mui/material/TextField';


interface DisplayZoneProperty {
  readonly blablaLines : string[],
  readonly sx : object,
}

function DisplayZone(props : DisplayZoneProperty) {

  return (
    <TextField fullWidth multiline inputProps={{ readOnly: true }}
               value={props.blablaLines.slice().reverse().join("\n")}
               maxRows={20} label="Here's your bla bla ..."
               variant="filled"
               sx={props.sx}
    />
  );
}

export default DisplayZone;
