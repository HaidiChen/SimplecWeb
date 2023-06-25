import Button from '@mui/material/Button';


function ActionZone() {

  return (
    <Button sx={{ marginTop: 4 }}
            variant="contained"
            onClick={() => {
              alert("Sending your nonsense.");
            }}
    >
      Save your blabla... or let them go!
    </Button>
  );
}

export default ActionZone;
