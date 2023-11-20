import {
    souporsandwichScreenshot, portfolioScreenshot, monthlyCalendarScreenshot,
    preworkScreenshot, techblogScreenshot, notetakerScreenshot, taskSandwichScreenshot
} from './images';

// portfolio projects
const projects = [
    {
        name: "Task Sandwich",
        description: " During the bootcamp, we realized one of the biggest struggles we were having was adequate communication and organization of larger-scaled projects. The purpose for creating this site was to address those issues while also delivering a fun reward system to keep people engaged. To that end, we created that rewards system based on sandwiches (i.e. if a member of the project works enough, they can recieve 'sandwiches' to use as credits for rewards in real life).",
        technologies: "REACT, GraphQL, JsonWebToken, Mongoose, Bootsrap",
        deployedLink: "https://task-sandwich.herokuapp.com/",
        githubLink: "https://github.com/sam-lerner/task-sandwich",
        source: taskSandwichScreenshot,
        alt: "screenshot of the homepage of Task Sandwich"
    },
    {
        name: "Soup or Sandwich",
        description: "A tech blog where you can sign up, login, create/edit/delete a post, or comment on other posts.",
        technologies: "Express.js, Sequelize, MySQL, Passport.js",
        deployedLink: "https://soup-or-sandwich.herokuapp.com/",
        githubLink: "https://github.com/kendrameda/Soup-or-Sandwich",
        source: souporsandwichScreenshot,
        alt: "screenshot of the game Soup or Sandwich"
    },
    {
        name: "Tech Blog",
        description: "This is my most recent project. A game where the user must choose a picture according to the instructions. The pictures consist of soup and sandwiches, or maybe not. The user can login to save their progress or score.",
        technologies: "Express.js, Express Handlebars, Sequelize, MySQL",
        deployedLink: "https://tech-blog-azn.herokuapp.com/",
        githubLink: "https://github.com/azimezn/tech-blog-an",
        source: techblogScreenshot,
        alt: "screenshot of the Tech Blog"
    },
    {
        name: "Note Taker",
        description: "A note application where you can create new notes, read previous notes, and delete any notes.",
        technologies: "Express.js",
        deployedLink: "https://note-taker-an.herokuapp.com/",
        githubLink: "https://github.com/azimezn/note-taker",
        source: notetakerScreenshot,
        alt: "screenshot of the note taker"
    },
    {
        name: "Monthly Calendar",
        description: "A personal calendar with interactive user experience. The calendar will reflect the user's schedule based on the following: desired NFL teams and their game schedules, holidays, and personal tasks.",
        technologies: "JavaScript",
        deployedLink: "https://jennahopeclem.github.io/monthly-planner/",
        githubLink: "https://github.com/jennahopeclem/monthly-planner",
        source: monthlyCalendarScreenshot,
        alt: "screenshot of the monthly planner"
    },
    {
        name: "My First Portfolio",
        description: "You can find some of my previous projects, my resume, and a little bit about me on this page. This is the first portfolio I ever made.",
        technologies: "JavaScript",
        deployedLink: "https://azimezn.github.io/azime-nail-portfolio/",
        githubLink: "https://github.com/azimezn/azime-nail-portfolio",
        source: portfolioScreenshot,
        alt: "Azime Nail's portfolio"
    },
    {
        name: "Pre-Work Study Guide",
        description: "My very first attempt in coding for the bootcamp I attended by Rutgers University.",
        technologies: "JavaScript",
        deployedLink: "https://azimezn.github.io/prework-study-guide/",
        githubLink: "https://github.com/azimezn/prework-study-guide",
        source: preworkScreenshot,
        alt: "screenshot of my prework study guide"
    },
]

export { projects }