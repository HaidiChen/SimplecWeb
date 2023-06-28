const SIMPLECS_ENDPOINT = "http://localhost:8080";

export const API_CALL_ERROR = 9;

export function getBlablas(blablaId : string) {
  return fetch(`${SIMPLECS_ENDPOINT}/blablas/${blablaId}`)
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
      },
      (err) => {
        console.error("Error retrieving data");
        console.error(err);

        return API_CALL_ERROR;
      });
}

export function saveBlablas(data : object) {
  return fetch(`${SIMPLECS_ENDPOINT}/blablas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
    },
    (err) => {
      console.error("Error saving data");
      console.error(err);

      return API_CALL_ERROR;
    }
  );
}
