const SERVER_URL = 'https://28.javascript.pages.academy/kekstagram';

export const getData = (onSuccess, onFail) => {
  fetch(`${SERVER_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .catch(onFail)
    .then(onSuccess);
};

export const sendData = (onSuccess, onFail, body) => {
  fetch(SERVER_POST_URL,
    {
      method: 'POST',
      body,
    }
  )
    .then ((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    });
};
