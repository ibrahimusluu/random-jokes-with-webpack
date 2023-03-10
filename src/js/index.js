/* TEST of APIS

// const joke = new JokeApi(); // new JokeApi; --> another usage
// joke.getJokeRandomly();

// const image = new UnsplashApi();
// image.getImageRandomly();

// const translation = new GoogleTranslateApi("how is all going");
// translation.translate();
*/

/* TEST of .env File with "node" keyword on terminal, but didn't work

const env = {
  NODE_ENV: "production",
};

console.log(this);
console.log(process.env.NODE_ENV);
*/

// console.log(MY_UNSPLASH_API_ACCESS_KEY); // worked with one of local JavaSript file which is env.js imported in index.html
import { startApplication } from "./screen.js"; // "./screen" --> give error, it should be with .js

startApplication();
