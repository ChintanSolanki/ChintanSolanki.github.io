// Home Section
document.getElementById('nameTitle').textContent = personalInfo.name;
document.getElementById('profilePicture').src = personalInfo.profilePicture;
document.getElementById('profilePicture').alt = personalInfo.name;
document.getElementById('nameHeading').textContent = personalInfo.name;
document.getElementById('shortBio').textContent = personalInfo.shortBio;
document.getElementById('linkedinLink').href = personalInfo.linkedinURL;
document.getElementById('trailheadLink').href = personalInfo.trailheadURL;

// About Section
document.getElementById('aboutTitle').textContent = "About " + personalInfo.name.split(" ")[0]; // Just the first name
document.getElementById('aboutMe').textContent = personalInfo.experience; // You can expand this in your data
document.getElementById('experience').textContent = personalInfo.experience;

const skillsList = document.getElementById('skillsList');
personalInfo.skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
});

// Projects Section
document.getElementById('projectsTitle').textContent = "My Projects";
const projectGrid = document.getElementById('projectGrid');
personalInfo.projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        // <div class="project-links">
        //     <a href="${project.githubLink}" target="_blank"><i class="fab fa-github"></i> GitHub</a>
        //     ${project.demoLink ? `<a href="${project.demoLink}" target="_blank">Demo</a>` : ''}
        // </div>
    `;
    projectGrid.appendChild(projectCard);
});

// Contact Section
document.getElementById('contactTitle').textContent = "Contact " + personalInfo.name.split(" ")[0]; // Just the first name
document.getElementById('emailLink').href = `mailto:${personalInfo.emailAddress}`;
document.getElementById('emailLink').textContent = personalInfo.emailAddress;
document.getElementById('linkedinLinkContact').href = personalInfo.linkedinURL;
document.getElementById('trailheadLinkContact').href = personalInfo.trailheadURL;

// Footer
document.getElementById('copyrightYear').textContent = personalInfo.copyrightYear;
document.getElementById('nameFooter').textContent = personalInfo.name;