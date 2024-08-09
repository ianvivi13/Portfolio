function generateCard(name, timePeriod, imageURL, githubLink, websiteLink = null, projectDescription = null) {
    let card = `
    <div class="card">
            <div class="card-inner">
                <div class="front">
                    <img class="card-img" src=${imageURL} alt=${name}>
                    <div class="container">
                        <h4><b>${name}</b></h4>
                        <p class="time-period">${timePeriod}</p>
                    </div>
                </div>
                <div class="back">`
        if(projectDescription !== null) {
            card += `<div class="project-description">${projectDescription}</div>`
        }
            card += `<a class="github-button" target="_blank" href=${githubLink}>
                        <i class="fa-brands fa-github"></i>
                        Github
                     </a>`
        if(websiteLink !== null) {
            card += `<a class="website-button" target="_blank" href=${websiteLink}>
                        <i class="fa-solid fa-globe"></i>
                        Website
                    </a>`
        }

        return card + `
                    <a class="card-button" href=${name.toLowerCase().replace(/ /g, '-')}>More Info</a>
                </div>
            </div>
        </div>
    `
}

module.exports = async function(eleventyConfig) {
    let cards = ""
    cards += generateCard("SixIVs Youtube Channel", "Summer 2024 - Present", "/_images/projects/sixivs.jpg", "https://github.com/SixIVs", "https://www.youtube.com/@SixIVs");
    cards += generateCard("Website", "Spring 2024 - Present", "/_images/home/headshot.jpg", "https://github.com/ianvivi13/Portfolio", '/', "HELLO WORLD");
    cards += generateCard("Pokemon Platinum Bot", "Fall 2023 - Present", "/_images/projects/pokemon.png", "https://github.com/ianvivi13/Pokemon-Platinum-Bot", null, "HELLO WORLD");
    cards += generateCard("Minecraft Modding", "Spring 2022 - Present", "/_images/projects/minecraft-mod.png", "https://github.com/Bit-of-Everything-MC");
    cards += generateCard("RevMetrix", "Fall 2023", "/_images/projects/revmetrix.png", "https://github.com/YCP-Rev-Metrix", "https://docs.revmetrix.io/");
    cards += generateCard("Infinite Trolley Problems", "Fall 2023", "/_images/projects/hacks.png", "https://github.com/ianvivi13/Hacks-2023");
    cards += generateCard("Radio Telescope", "Spring 2023", "/_images/projects/radio-telescope.jpg", "https://github.com/YCPRadioTelescope/YCP-RT-ControlRoom");
    cards += generateCard("Card Game Repository", "Spring 2022", "/_images/projects/card-game-repo.jpg", "https://github.com/ianvivi13/GameRepo");

    return `
    <div id="cards">
    ` + cards + `
    </div>
    `
}