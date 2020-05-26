import ASSETS from './'

export const projects = [
  {
    id: 1,
    title: 'Project "Parfuman-e-shop":',
    deployLink: 'https://parfuman.herokuapp.com',
    source: ASSETS.parfuman,
    text: 'Developed  online e-shop application using React, Redux for data store on client, Node.js, Express, MongoDB for data store on remote server. Responsive design, SCSS-styles. Used Git for control versions and members code review. Used SCRUM methodology for 6 persons teamwork. Project has been deployed on Heroku. Git repository:',
    gitLink:'https://github.com/ekrechetov/final-project-e-shop',
  },
  {
    id: 2,
    title: 'CV like React-Native App:',
    deployLink: 'https://expo.io/--/to-exp/exp%3A%2F%2F192.168.31.58%3A19000',
    source: ASSETS.cv,
    text: 'Developed  mobile application using React-Native. Git repository:',
    gitLink: 'https://github.com/ekrechetov/cv_react_native',
  },
  {
    id: 3,
    title: '"Pokedex":',
    deployLink: 'https://ekrechetov.github.io/testTeamvoy',
    source: ASSETS.pokemon,
    text: 'Developed client-app for REST  Pokemon API (HTML, CSS, Java Script, Ajax). Adaptive styling, loading portions of items, items filter, get and display item-details. On the Githab Pages:',
    gitLink:'https://github.com/ekrechetov/testTeamvoy',
  },
  {
    id: 4,
    title: 'Landing page "Forkio":',
    deployLink: 'https://ekrechetov.github.io/step2_forkio',
    source: ASSETS.forkio,
    text: 'Developed a responsive landing page according to the layout using HTML5, JS, SCSS, BEM  methodology.  JS and SCSS files concatenation, minifying and build using Gulp. Teamwork for 2 persons. Project on the Githab Pages:',
    gitLink:'https://github.com/ekrechetov/step2_forkio',
  },
  {
    id: 5,
    title: 'Landing page "HAM":',
    deployLink: 'https://jenya-99.gitlab.io/step1_ham',
    source: ASSETS.ham,
    text: 'Developed a non-responsive landing page according to the layout using HTML5, CSS3, with   dynamic elements on the page (JS). Implemented  slider, navigation tabs, interactive features using JavaScript. Project on the Gitlab Pages:',
    gitLink:'https://gitlab.com/jenya-99/step1_ham',
  },
]