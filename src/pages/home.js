


const home = function(){
    const content = document.querySelector('.content');

    const main = document.createElement("div");
    main.id="main";
    content.appendChild(main);

    const box1 = document.createElement("div");
    box1.id="box1";
    const box2 = document.createElement("div");
    box2.id="box2";
    main.appendChild(box1);
    main.appendChild(box2);

    const section1 = document.createElement("div");
    section1.classList.add("section");
    main.appendChild(section1);

    
    const about = document.createElement("div");
    about.id="about";
    section1.appendChild(about);

    const aboutTitle = document.createElement("div");
    aboutTitle.id="about-title";
    about.appendChild(aboutTitle);
    const abouth2 = document.createElement("h2")
    abouth2.textContent = "We are TinyFoods";
    aboutTitle.appendChild(abouth2);

    const aboutDescription = document.createElement("div");
    aboutDescription.id = "about-description";
    const aboutp = document.createElement("p");
    aboutp.textContent = "Welcome to our unique culinary haven, where gastronomy meets the miniature world! At our restaurant, we specialize in crafting exquisite tiny plates designed to delight both tiny people and even the most discerning bugs. Our chef's creations are a symphony of flavors, meticulously curated to cater to the delicate palates of our diminutive patrons. From mini sliders for tiny taste adventures to micro desserts that pack a punch, every dish is a celebration of miniature marvels. Join us for an unforgettable dining experience where small bites bring immense joy to even the smallest of connoisseurs.";
    aboutDescription.appendChild(aboutp);
    about.appendChild(aboutDescription);


    //second section
    const section2 = document.createElement("div");
    section2.classList.add("section");
    main.appendChild(section2);

    const hours = document.createElement("div");
    hours.id = "hours";
    section2.appendChild(hours);

    const hoursTitle = document.createElement("div");
    hoursTitle.id = "hours-title";
    
    hours.appendChild(hoursTitle);
    const hourstitleh3 = document.createElement("h3");
    hourstitleh3.innerText = "Hours of Operation";
    hoursTitle.appendChild(hourstitleh3);

    const hoursList = document.createElement("div");
    hoursList.id = "hours-list";
    hours.appendChild(hoursList);

    //create hours list
    const hoursItems = ['Monday: Closed', 'Tuesday: 10am-8pm',
    'Wednesday: 10am-8pm',
    'Thursday: 10am-8pm',
    'Friday: 10am-10pm',
    'Saturday: 10am-10pm',
    'Sunday: 8am-8pm'];

    let fragment = document.createDocumentFragment();
    const ul = document.createElement('ul');
    hoursItems.forEach(itemText => {
        let li = document.createElement('li');
        li.innerText = itemText;
        fragment.appendChild(li);
    })
    ul.appendChild(fragment);
    hoursList.appendChild(ul);


    const middlePic = document.createElement("div");
    middlePic.id = "middle-pic";
    section2.appendChild(middlePic);

    const middleImg = document.createElement("img");
    middleImg.src = "../src/img/tiny-sandwich.jpg" //wonder if I have to put this directory path
    middleImg.alt = "tiny sandwich";
    middlePic.appendChild(middleImg);

    const location = document.createElement("div");
    location.id = "location";
    section2.appendChild(location);

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
    
}

export default home;