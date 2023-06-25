import Button from '@mui/material/Button';


function ActionZone() {

  function clickHandler() {
    fetch("http://localhost:8080/greeting")
      .then((response) => response.json())
      .then((data) => {
        alert("This is what you get: { " + data.id + ", " + data.content + " }");
      });
  }

  return (
    <Button sx={{ marginTop: 4 }}
            variant="contained"
            onClick={clickHandler}
    >
      Save your blabla... or let them go!
    </Button>
  );
}

export default ActionZone;
