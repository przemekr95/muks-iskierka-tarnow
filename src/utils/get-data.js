const getData = (path, setData) => {
  fetch(`assets/data/${path}`)
    .then(response => response.json())
    .then(myJson => setData(myJson));
};

export default getData;
