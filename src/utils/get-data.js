export const getData = () => {
    fetch('assets/text/text.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        setData(myJson);
    });
}