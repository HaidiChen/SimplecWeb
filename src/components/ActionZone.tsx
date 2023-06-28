import Button from '@mui/material/Button';

import BlablaLinesLoader from './BlablaLinesLoader';
import { saveBlablas, API_CALL_ERROR } from '../services/Simplecs';


interface ActionZoneProperty {
  readonly blablaLines : string[],
  readonly handleBlablaLines : any,
}

function ActionZone(props : ActionZoneProperty) {

  function handleSave() {
    if (props.blablaLines.length <= 0) {
      alert("Nothing to save, you fool!");
      return;
    }

    const data = buildData(props.blablaLines);

    saveBlablas(data).then((result) => {
      if (result === API_CALL_ERROR) {
        alert("Something wrong with saving your blabla ...");
      } else if (!result) {
        alert("Internal Server Error! try again later");
      }
      else {
        alert("Your id for your blabla : " + data.id + "\n\n"
            + "Note it down, you need it to get your blablas back.");
        props.handleBlablaLines([]);
      }
    });
  }

  return (
    <>
      <BlablaLinesLoader handleLoad={props.handleBlablaLines}
                         sx={{ marginTop: 4, marginRight: 4 }} />

      <Button sx={{ marginTop: 4 }} variant="outlined" onClick={handleSave}>
        Save your blabla ... or let them go!
      </Button>
    </>
  );
}

export default ActionZone;

function buildData(blablaLines : string[]) {
  const blablaId = Math.ceil(Math.random() * Date.now() + 1).toString();

  const blablaData = {
    id: blablaId,
    lines: blablaLines,
  };

  return blablaData;
}
