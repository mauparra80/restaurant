import restaurant from "../img/restaurant.jpg"

const contact = function() 
{
    const content = document.querySelector(".content");

    const contactPage = document.createElement("div");
    contactPage.id="contactpage";
    content.appendChild(contactPage);

    const contactPageTitle = document.createElement("h1");
    contactPageTitle.id="contactpage-title";
    contactPageTitle.textContent = "Contact";
    contactPage.appendChild(contactPageTitle);

    //section1
    //contact
    const section1 = document.createElement("div");
    section1.classList.add("section");
    contactPage.appendChild(section1);

    const contact = document.createElement("div");
    contact.id = "contact";
    section1.appendChild(contact);

    const info = document.createElement("div");
    info.id="info";
    contact.appendChild(info);

    info.appendChild(document.createElement('h1')).textContent = 'Tiny Foods';
    info.appendChild(document.createElement('a')).innerText = '321-654-0987';
    info.appendChild(document.createElement('p')).textContent = 'tinyfoods.contact@tinyworld.com';

    const careers = document.createElement("div");
    careers.id="careers";
    contact.appendChild(careers);

    careers.appendChild(document.createElement('h3')).textContent = 'Join Our Tiny Team Today!';
    careers.appendChild(document.createElement('p')).textContent = '*Must be under 1 foot tall to apply.';

    //section1 service

    //section1 location
    const location = document.createElement("div");
    location.id = "location";
    section1.appendChild(location);

    const locationTitle = document.createElement("div");
    locationTitle.id = "location-title";
    location.appendChild(locationTitle);
    const locationtitleh3 = document.createElement("h3");
    locationtitleh3.textContent = "Location";
    locationTitle.appendChild(locationtitleh3);

    const locationWritten = document.createElement("div");
    locationWritten.id = "location-written";
    locationWritten.textContent = "8231 Kitchen Corner ln. FloorCity SomeonesHouse";
    location.appendChild(locationWritten);

    const locationMap = document.createElement("div");
    locationMap.id = "location-map";
    const locationimg = document.createElement("img");
    locationimg.src = "../src/img/tinyfoods-map.jpg";
    locationMap.appendChild(locationimg);
    location.appendChild(locationMap);

    //section2
    const section2 = document.createElement("div");
    section2.classList.add("section");
    contactPage.appendChild(section2);

    const section2Img = document.createElement("img");
    section2Img.id="contact-bottom-img";
    section2Img.src=restaurant;
    section2.appendChild(section2Img);

}

export default contact;