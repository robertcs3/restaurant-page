function menuPage () {
    let body = document.getElementById('body');

    let itemOne = document.createElement('div');
    itemOne.id = 'itemOne';
    let itemTwo = document.createElement('div');
    itemTwo.id = 'itemTwo';
    let itemThree = document.createElement('div');
    itemThree.id = 'itemThree';

    body.appendChild(itemOne);
    body.appendChild(itemTwo);
    body.appendChild(itemThree);

    let itemOneTitle = document.createElement('h2');
    let itemTwoTitle = document.createElement('h2');
    let itemThreeTitle = document.createElement('h2');
    let itemOneDesc = document.createElement('p');
    let itemTwoDesc = document.createElement('p');
    let itemThreeDesc = document.createElement('p');
    
    itemOneTitle.textContent = "Hamburger";
    itemTwoTitle.textContent = "Pasta";
    itemThreeTitle.textContent = "Steak";

    itemOneDesc.textContent = "Only the juiciest hamburger";
    itemTwoDesc.textContent = "Best pasta ever";
    itemThreeDesc.textContent = "Big fat steak";

    itemOne.appendChild(itemOneTitle);
    itemOne.appendChild(itemOneDesc);
    itemTwo.appendChild(itemTwoTitle);
    itemTwo.appendChild(itemTwoDesc);
    itemThree.appendChild(itemThreeTitle);
    itemThree.appendChild(itemThreeDesc);

    /* itemOne */

}

export {menuPage}