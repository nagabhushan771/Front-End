const myform = document.querySelector('.form');


function bringForm(){
    myform.style.cssText = 'z-index: 1';
}

function addButton(){
    const projectName = document.getElementById('name');
    let projectLinks = document.getElementById('pls');
    var name = projectName.value;
    // alert(`./${name}/index.html`);
    var projectLink = document.createElement('div');
    projectLink.classList.add = 'project-link';
    var aTag = document.createElement('a');
    aTag.href = `./${name}/index.html`;
    aTag.innerText = `${name}`;
    projectLink.appendChild(aTag);
    projectLinks.insertBefore(projectLink, projectLinks.children[0]);
    // alert("");
    // projectLinks.appendChild(projectLink);
    myform.value = "";
    myform.style.cssText = 'z-index: -1';
}