
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

export function createWork(project) {

}

function createStack() {

}

function createContact() {

}
