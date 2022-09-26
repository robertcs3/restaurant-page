function pageLoad () {
    let content = document.getElementById('content');
    let img = document.createElement('img');
    img.src= 'images/restaurant.png';
    img.alt ='restaurant image';
    content.appendChild(img);

}



export default pageLoad;