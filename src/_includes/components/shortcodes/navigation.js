function page(name, link, appendedUrl = "/") {
    return {
        name: name,
        link: link,
        url: `${link}${appendedUrl}`.toLowerCase()
    }
}

const pages = [page("Home", "/", ""), page("Education", "/education"),
    page("Projects", "/projects"), page("Work Experience", "/work-experience"),
    page("Contact Me", "/contact-me")];

function generateLink(page, current) {
    if (current.toLowerCase() === page.url) {
        return `
            <a class="nav-button active" href=".">${page.name}</a>
            `;
    } else {
        return `
            <a class="nav-button" href="${page.link}">${page.name}</a>
            `;
    }
}

module.exports = async function(eleventyConfig) {
    let links = "";
    pages.forEach((page) => {
        links += generateLink(page, this.page.url);
    });

    return `
        <img id="logo" src="/_images/home/logo.png" alt="Ian Viveiros logo">
    <div id="nav-bar">
        ${links}
        <i class="fa-solid fa-gear settings"></i>
    </div>`;
};

// Hamburger
// <i class="fa-solid fa-bars"></i>