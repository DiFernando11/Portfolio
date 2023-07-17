import projectGameLoop from './assets/gameLoopPortada.png';
import projectNeefter from './assets/neefter.png';
import projectCencoSudJumbo from './assets/Jumbo.png';
import projectCencoSudSisa from './assets/santaIsable.png';
import projectCencoSudParis from './assets/paris.png';
import projectCountries from './assets/countriesPiPortada.png';
import projectPokedex from './assets/pokemonPortada (1).png';
import projectTodos from './assets/todolist.png';
import projectDog from './assets/dogsPortada (1).png';
import projectWather from './assets/weather.png';
import projectMovies from './assets/appMoviesPortada.png';
import projectHenryGram from './assets/HenryGram.png';
import videoProjectGameLoop from './assets/presentation-gameloop.mp4';
import videoProjectCountries from './assets/AppCountries.mp4';
import videoProjectPokedex from './assets/PokemonAplication.mp4';
import videoProjectTodos from './assets/AppTodo.mp4';
import videoProjectWeather from './assets/AppWeather.mp4';
import videoProjectMovies from './assets/AppMovies.mp4';
import videoProjectDogs from './assets/DogsApp.mp4';
import videoProjectHenryGram from './assets/Henrry-Gram - Compressed with FlexClip.mp4';
import logoJavaScript from './assets/javascript.png';
import logoHtml from './assets/html.png';
import logoCss from './assets/css.png';
import logoReact from './assets/reactjs.png';
import logoRedux from './assets/redux.png';
import logoNode from './assets/nodejs.png';
import logoPostgrest from './assets/postgressql.png';
import logoExpress from './assets/express.png';
import logoMongo from './assets/MongoDB_Logo.svg.png';
import logoSocket from './assets/1024px-Socket-io.svg.png';

export function validate(input) {
  let errors = {};
  if (input.asunto.length < 3) {
    errors.asunto = 'It is very short.';
  }

  if (input.name.length < 3) {
    errors.name = 'It is very short.';
  }

  if (input.message.length < 4) {
    errors.message = 'It is very short.';
  }
  if (!input.email || typeof input.email !== 'string') {
    errors.email = 'Please type a email!';
  }
  if (
    /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(input.email) === false
  ) {
    errors.email = 'Please type a valid email!';
  }
  return errors;
}
export const projectsPersonal = [
  {
    name: 'Cencosud - Jumbo',
    project: projectCencoSudJumbo,
    video: null,
    gitHub: null,
    aplication: 'https://www.jumbo.cl/',
    technologies: [logoHtml, logoCss, logoJavaScript, logoReact, logoNode],
  },
  {
    name: 'Cencosud - Paris',
    project: projectCencoSudParis,
    video: null,
    gitHub: null,
    aplication: 'https://www.paris.cl/',
    technologies: [logoHtml, logoCss, logoJavaScript, logoReact, logoNode],
  },
  {
    name: 'Cencosud - Santa Isabel',
    project: projectCencoSudSisa,
    video: null,
    gitHub: null,
    aplication: 'https://www.santaisabel.cl/',
    technologies: [logoHtml, logoCss, logoJavaScript, logoReact, logoNode],
  },
  {
    name: 'Neefter',
    project: projectNeefter,
    video: null,
    gitHub: null,
    aplication: 'https://minto-ui-iota.vercel.app/#/collection',
    technologies: [
      logoHtml,
      logoCss,
      logoJavaScript,
      logoReact,
      logoNode,
      logoPostgrest,
    ],
  },
  {
    name: 'HENRYGRAM',
    project: projectHenryGram,
    video: videoProjectHenryGram,
    gitHub: 'https://github.com/DiFernando11/HenryGram',
    aplication: 'https://henry-gram-client.vercel.app/#/home',
    technologies: [
      logoHtml,
      logoCss,
      logoJavaScript,
      logoReact,
      logoRedux,
      logoNode,
      logoMongo,
      logoSocket,
    ],
  },
  {
    name: 'GAMELOOP APP',
    project: projectGameLoop,
    video: videoProjectGameLoop,
    gitHub: 'https://github.com/DiFernando11/gamer-commerce',
    aplication: 'https://gamer-commerce.vercel.app',
    technologies: [
      logoHtml,
      logoCss,
      logoJavaScript,
      logoReact,
      logoRedux,
      logoNode,
      logoExpress,
      logoPostgrest,
    ],
  },
  {
    name: 'COUNTRIES APP',
    project: projectCountries,
    video: videoProjectCountries,
    gitHub: 'https://github.com/DiFernando11/PI-Countries',
    aplication: 'https://countries-app-api.vercel.app',
    technologies: [
      logoHtml,
      logoCss,
      logoJavaScript,
      logoReact,
      logoRedux,
      logoNode,
      logoExpress,
      logoPostgrest,
    ],
  },
  {
    name: 'MOVIES APP',
    project: projectMovies,
    video: videoProjectMovies,
    gitHub: 'https://github.com/DiFernando11/AppMoviesApiRest',
    aplication: 'https://difernando11.github.io/AppMoviesApiRest/',
    technologies: [logoHtml, logoCss, logoJavaScript],
  },
  {
    name: 'POKEDEX',
    project: projectPokedex,
    video: videoProjectPokedex,
    gitHub: 'https://github.com/DiFernando11/pokedex',
    aplication: 'https://difernando11.github.io/pokedex/',
    technologies: [logoHtml, logoCss, logoJavaScript, logoReact],
  },
  {
    name: 'DOGS APP',
    project: projectDog,
    video: videoProjectDogs,
    gitHub: 'https://github.com/DiFernando11/ConsumoApiDogApi',
    aplication: 'https://difernando11.github.io/ConsumoApiDogApi/',
    technologies: [logoHtml, logoCss, logoJavaScript, logoReact],
  },
];
