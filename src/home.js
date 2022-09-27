function homePage () {
    let content = document.getElementById('content');
    let header = document.createElement('div');
    let body = document.createElement('div');
    let footer = document.createElement('div');

    header.id = 'header';
    body.id = 'body';
    footer.id = 'footer';
    content.appendChild(header);
    content.appendChild(body);
    content.appendChild(footer);


    /* header */
    let tabs = document.createElement('ul');
    let homeTab = document.createElement('li');
    homeTab.textContent = 'Home';
    let menuTab = document.createElement('li');
    menuTab.textContent = 'Menu';
    let contactTab = document.createElement('li');
    contactTab.textContent = 'Contact';

    header.appendChild(tabs);
    tabs.appendChild(homeTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactTab);
    /* header */

    /* body */
    let restaurantImage = document.createElement('img');
    restaurantImage.src = 'images/restaurant.png'
    restaurantImage.alt = 'restaurant page';

    let welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = "Welcome to the juiciest restaurant page you'll ever see";

    body.appendChild(restaurantImage);
    body.appendChild(welcomeMessage);
    /* body */

    /* footer */
    let footerContent = document.createElement('p');
    footerContent.textContent = 'Github @ robertcs3 2022';
    footer.appendChild(footerContent);
    /* footer */
}



export {homePage};