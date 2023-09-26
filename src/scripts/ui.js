import { renderProject } from "./dynamicUI";
import { htmlIMG } from "./img";
import { cssIMG } from "./img";
import { jsIMG } from "./img";
import { gitIMG } from "./img";
import { webpackIMG } from "./img";
import { linuxIMG } from "./img";
import { weatherIMG } from "./img";
import { gameArchiveIMG } from "./img";
import { terminalIMG } from "./img";
import { streetFighterCombatIMG } from "./img";
import { heroIMG } from "./img";

// create elements
const body = document.querySelector('body');
const header = document.createElement('header');
const aboutSection = document.createElement('section');
const workSection = document.createElement('section');
const stackSection = document.createElement('section');
const contactSection = document.createElement('section');

export function createDOM() {
    const main = document.querySelector('main')

    // assign class and ids
    aboutSection.classList = 'about';
    aboutSection.id = 'about';
    workSection.classList = 'work';
    workSection.id = 'work';
    stackSection.classList = 'stack';
    stackSection.id = 'stack';
    contactSection.classList = 'contact';
    contactSection.id = 'contact';

    body.appendChild(header)
    main.appendChild(aboutSection);
    main.appendChild(workSection);
    main.appendChild(stackSection);
    main.appendChild(contactSection);

    createAbout();
    createWork();
    createStack();
    createContact();
}

function createAbout(){
    aboutSection.innerHTML = `
        <div class="left-about">
            <h1>Hi, I'm<br><span class="about-name">Dylon</span></h1>
            <p>
                A self taught web developer with a burning passion to learn and create. All of my coding projects are built from the ground up, from coding to UI design.
            </p>
        </div>
        <div class="right-about">
            <img src="${heroIMG.src}" alt="hero image">
        </div>`
};

export function createWork() {
    const weatherAPP = {
        title: 'Weather App',
        image: `${weatherIMG.src}`,
        link: 'https://dmychel.github.io/weather-app/',
        description: 'This is a simple weather app that uses a API from weatherapi. This app includes the ability to search cities and change the weather information from fahrenheit to celsius. The app has a couple of other features worth reading about in the README on the github repo.'
    };

    const videGameArchive = {
        title: 'Video Game Archive',
        image: `${gameArchiveIMG.src}`,
        link: 'https://dmychel.github.io/game-archive/',
        description: 'Introducing a user-friendly archive that captures essential details about your games. You can add any game from any generation,console, and genre. You even have the ability to add a picture for coverart.'
    };

    const terminal = {
        title: 'Terminal Portfolio',
        image: `${terminalIMG.src}`,
        link: 'https://dmychel.github.io/terminal-portfolio/',
        description: 'One of my favorite projects - my portfolio in a terminal-style interface! As a GNU Linux enthusiast, creating this mock terminal has been an exhilarating experience. The interface boasts an array of terminal commands, thoughtfully implemented using a comprehensive switch statement.'
    }

    const streetFighterCombat = {
        title: 'Street Fighter Combat',
        image: `${streetFighterCombatIMG.src}`,
        link: 'https://dmychel.github.io/street-fighter-combat/',
        description: '  This project is an engaging and innovative take on the traditional Rock Paper Scissors game. It features a dynamic and interactive user interface with turn-based combat elements, character selections, and health bars, all achieved through dynamic DOM manipulation.'
    }

    const projects = [weatherAPP, videGameArchive, terminal, streetFighterCombat]

    renderProject(projects)
};

function createStack() {
    stackSection.innerHTML = `
        <h2> Stack</h2 >
        <div class="stack-img">
            <img src="${htmlIMG.src}" alt="HTML 5">
            <img src="${cssIMG.src}" alt="CSS">
            <img src="${jsIMG.src}" alt="Javascript">
            <img src="${gitIMG.src}" alt="Git">
            <img src="${webpackIMG.src}" alt="Webpack">
            <img src="${linuxIMG.src}" alt="GNU Linux">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest">
        </div>`
}

function createContact() {
    contactSection.innerHTML = `
    <h2>Contact</h2>
    <div class="form-container">
        <form action="">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Your Name" required>

            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="yourEmail@mail.com" required>

            <label for="subject">Subject</label>
            <input type="text" name="subject" id="subject" placeholder="Subject" required>

            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>

            <input type="submit" name="submit" id="submit" value="Submit">
        </form>
    </div>`
};
