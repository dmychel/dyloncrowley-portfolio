import { createWork } from "./ui";



export function renderProject(project) {
    // create elements
    const workSection = document.querySelector('#work');
    const projectsContainer = document.createElement('div');

    // content
    workSection.innerHTML = '<h2>Projects</h2>'

    // append 
    workSection.appendChild(projectsContainer);

    // dynamically create projects
    projectsContainer.innerHTML = '';
    for (let i = 0; i < project.length; i++) {
        let title = project[i].title;
        let image = project[i].imgage;
        let link = project[i].link;
        let description = project[i].description

        console.log(title)
        let projectDiv = document.createElement('div')
        projectDiv.innerHTML = `
        <div class="project-img">
            <img src="#" alt="#">
        </div>
        <div class="project-info">
            <h2><a href="${link}" target="_blank">${title}</a></h2>
            <p>${description}</p>
        </div>`

        projectsContainer.appendChild(projectDiv)
    };
}