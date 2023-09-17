import { renderProject } from "./dynamicUI";
// create elements
const aboutSection = document.createElement('section');
const workSection = document.createElement('section');
const stackSection = document.createElement('section');
const contactSection = document.createElement('section');

export function createDOM() {
    const main = document.querySelector('main')

    // assign class and ids
    aboutSection.classList = 'about'
    aboutSection.id = 'about'
    workSection.classList = 'work'
    workSection.id = 'work'
    stackSection.classList = 'stack'
    stackSection.id = 'stack'
    contactSection.classList = 'contact'
    contactSection.id = 'contact'

    main.appendChild(aboutSection);
    main.appendChild(workSection);
    main.appendChild(stackSection);
    main.appendChild(contactSection);

    createAbout()
    createWork()
    createStack()
}

function createAbout() {
    aboutSection.innerHTML = `
    <header class="header">
    <div class="name">
        <span>Dylon Crowley</span>
    </div>
    <div class="nav">
        <nav class="nav-header" id="header">
            <ul>
                <li><a href="">Dev-View</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>
<div class="container">
    <div class="hero-container">
        <span class="hero" id="hero"></span>
    </div>
    <div class="arrow-container fadeIn-animation" id="arrowContainer">
        <a href="#work"><img src="img/down.png" alt="Down Arrow"></a>
        <a href="#work"><img src="img/down.png" alt="Down Arrow"></a>
        <a href="#work"><img src="img/down.png" alt="Down Arrow"></a>
    </div>
</div>`
}

export function createWork() {
    const weatherAPP = {
        title: 'Weather App',
        image: 'heres a link',
        link: 'https://dmychel.github.io/weather-app/',
        description: 'This is a simple weather app that uses a API from weatherapi. This app includes the ability to search cities and change the weather information from fahrenheit to celsius. The app has a couple of other features worth reading about in the README on the github repo.'
    };

    const videGameArchive = {
        title: 'Video Game Archive',
        image: 'link',
        link: 'https://dmychel.github.io/dyloncrowley-portfolio/pages/terminal.html',
        description: 'Introducing a user-friendly archive that captures essential details about your games. You can add any game from any generation,console, and genre. You even have the ability to add a picture for coverart.'
    };

    const projects = [weatherAPP, videGameArchive]

    renderProject(projects)
}

function createStack() {
    stackSection.innerHTML = `
        <h2>Stack</h2>
        <div class="stack-img">
        <img src="#" alt="#">
            <img src="" alt="#">
            <img src="" alt="#">
            <img src="" alt="#">
            <img src="" alt="#">
            <img src="" alt="#">
        </div>`
}

function createContact() {

}
