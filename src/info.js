import { souporsandwichScreenshot, portfolioScreenshot, monthlyCalendarScreenshot, preworkScreenshot } from './images';

// portfolio projects
const projects = [
    {
        name: "Soup or Sandwich",
        description: "This is my most recent project. A game where the user must choose a picture according to the instructions. The pictures consist of soup and sandwiches, or maybe not. The user can login to save their progress or score.",
        deployedLink: "https://soup-or-sandwich.herokuapp.com/",
        githubLink: "",
        source: {souporsandwichScreenshot},
        alt: "screenshot of the game Soup or Sandwich"
    },
    {
        name: "Monthly Calendar",
        description: "It's a personal calendar with interactive user experience. The calendar will reflect the user's schedule based on the following: desired NFL teams and their game schedules, holidays, and personal tasks.",
        deployedLink: "https://jennahopeclem.github.io/monthly-planner/",
        githubLink: "",
        source: {monthlyCalendarScreenshot},
        alt: "screenshot of the monthly planner"
    },
    {
        name: "My Portfolio",
        description: "I think you will see that it looks very familiar. You can find all of my current and previous project, my resume, and a little bit about me on this page. You can also contact me through this page.",
        deployedLink: "https://azimezn.github.io/azime-nail-portfolio/",
        githubLink: "",
        source: {portfolioScreenshot},
        alt: "Azime Nail's portfolio"
    },
    {
        name: "Pre-Work Study Guide",
        description: "My very first attempt in coding for the bootcamp I attended by Rutgers University.",
        deployedLink: "https://azimezn.github.io/prework-study-guide/",
        githubLink: "",
        source: {preworkScreenshot},
        alt: "screenshot of my prework study guide"
    },
]

export { projects }