export function createDOM() {
    const main = document.querySelector('main')

    // create elements
    const aboutSection = document.createElement('section');
    const workSection = document.createElement('section');
    const stackSection = document.createElement('section');
    const contactSection = document.createElement('section');

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
}

