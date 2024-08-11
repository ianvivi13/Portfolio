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
            card += `<div class="project-title">${name}</div>
                     <div class="project-description">${projectDescription}</div>`
        }
            card += `<div class="buttons">
                     <a class="github-button" target="_blank" href=${githubLink}>
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
        </div>
    `
}

module.exports = async function(eleventyConfig) {
    let cards = ""
    cards += generateCard("SixIVs Youtube Channel", "Summer 2024 - Present", "/_images/projects/sixivs.jpg", "https://github.com/SixIVs", "https://www.youtube.com/@SixIVs", "I started this YouTube channel back in 2015 but just recently started uploading longform content again after 2 years of being inactive. My recent videos, and my planned future videos, all involve some sort of tool or mod that I programmed to make games more interesting and fun to play. I originally uploaded let's play content to my channel but recently became much more interested in pushing video games to their limits, either with vanilla challenges or by modding the games and using external tools to make things more interesting.");
    cards += generateCard("Website", "Spring 2024 - Present", "/_images/home/headshot.jpg", "https://github.com/ianvivi13/Portfolio", '/', "This website is a collection of all the experience I have gained throughout my life. It contains all of my projects, education, and work experience, as well as some personal information about me. Each of my experiences has detailed descriptions of what I did and the knowledge I gained from each. Additionally, I have included links for users to find more information about everything listed on the site.");
    cards += generateCard("Pokemon Platinum Bot", "Fall 2023 - Present", "/_images/projects/pokemon.png", "https://github.com/ianvivi13/Pokemon-Platinum-Bot", null, "Pokemon Platinum is one of my favorite games of all time and I wanted to create an artificial intelligence to learn and play through the game. So far, I have basic helper functions created and have begun to look through the game's memory to figure out which data is stored in which locations. Once I am able to create a map of the game's internal memory, I will begin collecting data and using it to train a neural network to allow it to make its own decisions on how to best play the game.");
    cards += generateCard("Minecraft Modding", "Spring 2022 - Present", "/_images/projects/minecraft-mod.png", "https://github.com/Bit-of-Everything-MC", null, "My friend and I have been working on Minecraft modding for over two years now. We have been able to add modded blocks, items, potions, decorations, mobs, and more to the game by studying the game's source code and using it to create our own features. One of our largest mods is the Bit O' Everything mod, which has several hundred new additions to the game and is still in development. I have also done some modding on my own, either adding new features or modifying the game's source code to make the game more challenging for myself.");
    cards += generateCard("RevMetrix", "Fall 2023", "/_images/projects/revmetrix.png", "https://github.com/YCP-Rev-Metrix", "https://docs.revmetrix.io/", "RevMetrix is an ongoing capstone project at York College of Pennsylvania. It will eventually be a mobile application that connects via Bluetooth to a small module that is placed inside of a bowling ball. The app will then be able to gather data from the module and from video recordings of throws which can then be used to track and analyze performance. The project originated from the work of Dr. Babcock and Professor Hake, two computer science professors at the college.");
    cards += generateCard("Infinite Trolley Problems", "Fall 2023", "/_images/projects/hacks.png", "https://github.com/ianvivi13/Hacks-2023", null, "The Infinite Trolley Problems website was a website created by myself and two other people as part of the York College Hackathon in 2023. The website allowed the user to create \"meme-like\" trolley problems by uploading photos and editing the text of the problem. The user would then be able to save the trolley problem to their local machine. The website also allowed a user to host a viewing of all of their created trolley problems, allowing other people to connect to the site and vote on whether they should pull the lever or not take any action.");
    cards += generateCard("Radio Telescope", "Spring 2023", "/_images/projects/radio-telescope.jpg", "https://github.com/YCPRadioTelescope/YCP-RT-ControlRoom", null, "The Radio Telescope project was a capstone project hosted by York College of Pennsylvania for over 5 years. In its final semester, myself and one other developer worked in the control room testing functionality and fixing any bugs in both the code and with the hardware. We also worked with clients from the York County Astronomical Society to ensure the telescope met or exceeded the originally specified requirements. The telescope will eventually be installed in John C. Rudy County Park in York, PA.");
    cards += generateCard("Card Game Repository", "Spring 2022", "/_images/projects/card-game-repo.jpg", "https://github.com/ianvivi13/GameRepo", null, "This web application was created by myself and three other developers as a team project in our software development class. The application featured blackjack and Uno as two playable games and contained backend logic for Exploding Kittens. The website also allowed users to create an account and log in as well as to play locally with other logged in users. All game statistics for each user would then be stored in a database and could be retrieved to view the \"stats\" page on the site.");

    return `
    <div id="cards">
    ` + cards + `
    </div>
    `
}