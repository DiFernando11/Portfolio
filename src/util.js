import projectGameLoop from "./assets/GameLoop.png";
import projectCountries from "./assets/countriesApi.png";
import projectPokedex from "./assets/pokedex.png";
import projectTodos from "./assets/todolist.png";
import projectDog from "./assets/dogsapp.png";
import projectWather from "./assets/weather.png";
import projectMovies from "./assets/DiferMoviesApp.png";
import videoProjectCountries from "./assets/AppCountries.mp4";
import videoProjectPokedex from "./assets/AppPokedex.mp4";
import videoProjectTodos from "./assets/AppTodo.mp4";
import videoProjectWeather from "./assets/AppWeather.mp4";
import videoProjectMovies from "./assets/AppMovies.mp4";
import videoProjectDogs from "./assets/DogsApp.mp4";
import logoJavaScript from "./assets/javascript.png";
import logoHtml from "./assets/html.png";
import logoCss from "./assets/css.png";
import logoReact from "./assets/reactjs.png";
import logoRedux from "./assets/redux.png";
import logoNode from "./assets/nodejs.png";
import logoPostgrest from "./assets/postgressql.png";
import logoExpress from "./assets/express.png";

export function validate(input) {
  let errors = {};
  if (input.asunto.length < 3) {
    errors.asunto = "It is very short.";
  }

  if (input.name.length < 3) {
    errors.name = "It is very short.";
  }

  if (input.message.length < 4) {
    errors.message = "It is very short.";
  }
  if (!input.email || typeof input.email !== "string") {
    errors.email = "Please type a email!";
  }
  if (
    /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(input.email) === false
  ) {
    errors.email = "Please type a valid email!";
  }
  return errors;
}
export const projectsPersonal = [
  {
    name: "GAMELOOP APP",
    project: projectGameLoop,
    video: "https://www.ahiva.info/Gifs-Animados/Simbolos-y-signos/Construccion-Sites-Obras/Construccion-Sites-Obras-159.gif",
    gitHub: "https://github.com/DiFernando11/gamer-commerce",
    aplication: "https://gamer-commerce.vercel.app",
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
    name: "COUNTRIES APP",
    project: projectCountries,
    video: videoProjectCountries,
    gitHub: "https://github.com/DiFernando11/PI-Countries",
    aplication: "https://countries-app-api.vercel.app",
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
    name: "MOVIES APP",
    project: projectMovies,
    video: videoProjectMovies,
    gitHub: "https://github.com/DiFernando11/AppMoviesApiRest",
    aplication: "https://difernando11.github.io/AppMoviesApiRest/",
    technologies: [logoHtml, logoCss, logoJavaScript],
  },
  {
    name: "WEATHER APP",
    project: projectWather,
    video: videoProjectWeather,
    gitHub: "https://github.com/DiFernando11/Weather-App",
    aplication:
      "https://62f2f16dc8eb5839d7f16bcd--cerulean-biscuit-c2f248.netlify.app/",
    technologies: [logoHtml, logoCss, logoJavaScript, logoReact],
  },
  {
    name: "TODO LIST APP",
    project: projectTodos,
    video: videoProjectTodos,
    gitHub: "https://github.com/DiFernando11/cursobasicojsreact",
    aplication: "https://difernando11.github.io/cursobasicojsreact/",
    technologies: [logoHtml, logoCss, logoJavaScript, logoReact],
  },
  {
    name: "POKEDEX",
    project: projectPokedex,
    video: videoProjectPokedex,
    gitHub: "https://github.com/DiFernando11/pokedex",
    aplication: "https://difernando11.github.io/pokedex/",
    technologies: [logoHtml, logoCss, logoJavaScript, logoReact],
  },
  {
    name: "DOGS APP",
    project: projectDog,
    video: videoProjectDogs,
    gitHub: "https://github.com/DiFernando11/ConsumoApiDogApi",
    aplication: "https://difernando11.github.io/ConsumoApiDogApi/",
    technologies: [logoHtml, logoCss, logoJavaScript, logoReact],
  },
];
