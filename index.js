async function loaded(reader) {
    const response = await fetch('https://hf.space/embed/trcaset-rbnai/bears/+/api/predict', {
        method: "POST", body: JSON.stringify({ "data": [reader.result] }),
        headers: { "Content-Type": "application/json" }
    });
    const json = await response.json();
    const label = json['data'][0]['confidences'][0]['label'];
    // const div = document.createElement('div');
    results.innerHTML += `<br/><img src="${reader.result}" width="300"> <p>${label}</p><br>`
}
function read(file) {
    //console.log(photos.files);
    //console.log([...photos.files]);
    const reader = new FileReader();
    reader.addEventListener('load', () => loaded(reader))
    reader.readAsDataURL(file);
}
photos.addEventListener('input', () => {
    results.innerHTML = "<br>";
    [...photos.files].map(read) });
