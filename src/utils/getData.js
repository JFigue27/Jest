const getData = api => {
  return fetch(api)
    .then(r => r.json())
    .then(r => r)
    .catch(err => err);
};

export default getData;
