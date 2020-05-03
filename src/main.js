export let secondsArray = [];

const URL = 'https://jsonplaceholder.typicode.com/posts';

export const apiCall = (seconds, url = URL) => fetch(`${url}?seconds=${seconds}`, {
  method: 'POST',
  body: JSON.stringify(seconds)
}).then(resp => {
  if (!resp.ok) {
    throw Error(`API Error: ${resp.statusText}`);
  }
  return resp.json()
});

export const clickHandler = async () => {
  const seconds = new Date().getSeconds();

  if (secondsArray.includes(seconds)) {
    console.warn(`seconds = ${seconds} is already captured!`);
    return;
  }

  secondsArray = secondsArray.concat(seconds);
  await apiCall(seconds)
    .then(data => console.log(`(Id ${data.id}, seconds ${seconds})`))
    .catch(error => {
      console.error(`Api failed for seconds = ${seconds} with following error \n ${error}`);
      const index = secondsArray.indexOf(seconds);
      secondsArray = secondsArray.slice(0, index).concat(secondsArray.slice(index + 1, secondsArray.length));
    });
}

export const debounce = (callback, wait) => {
  let timeout;
  return (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  };
}

//document.querySelector('#calcBtn').addEventListener('click', debounce(clickHandler, 1000));

var el = document.querySelector('#calcBtn');
if (el) {
  el.addEventListener('click', debounce(clickHandler, 1000));
};