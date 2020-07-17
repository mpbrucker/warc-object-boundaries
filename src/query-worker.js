onmessage = (e) => {
    let href = e.data;
    checkCdxQueryResult(href).then((isPresent) => {
        return [href, isPresent];
    })
}

function checkCdxQueryResult(uri) {
    return fetch(uri).then
    (res => res.text()).then
    (response => response != '');
}