// import { getImage } from "./unsplash_api.js"; // export with default
// import { getJoke } from "./joke_api.js"; // export without default
// import { translate } from "./google_translate_api.js";

// Faster in This Way. --> Code Splitting and Dynamic Import
const getImage = () => import("./unsplash_api");
const getJoke = () => import("./joke_api");
const translate = () => import("./google_translate_api");

class Screen {
  constructor() {
    this.getJokeBtn = document.querySelector(".get-joke-button");
    this.getJokeBtn.addEventListener("click", () => this.getJoke()); // or "this.getJoke" or "this.getJoke.bind(this)" as second parameter
  }

  async getJoke() {
    // to use when we need, to make performance faster
    const randomImage = await (await getImage()).getImage(); // we need to "wait" for result on the behalf of our project logic
    const randomJoke = await (await getJoke()).getJoke();
    const translation = await (await translate()).translate(randomJoke);
    // const translation = await (await translate(randomJoke)).translate(); // didn't work --> undefined parameter

    // here; slower performance
    // const randomImage = await getImage();
    // const randomJoke = await getJoke();
    // const translation = await translate(randomJoke);

    const allResults = {
      randomImage,
      randomJoke,
      translation,
    };

    this.printResultsToScreen(allResults);
  }

  printResultsToScreen(results) {
    document.querySelector(".result").innerHTML = `<div class="card">
            <div class="card-image">
              <!-- 16: width, 9: heigth -->
              <figure class="image is-16by9">
                <img
                  src="${results.randomImage}"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4 has-text-danger pb-4">${results.randomJoke}</p>
                </div>
              </div>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4 has-text-primary pb-4">
                    <span class="has-text-danger">Translated to Turkish: </span>${results.translation}
                  </p>
                </div>
              </div>
            </div>
          </div>`;
  }
}

// when we use export with "default"; importing names don't have to be the same
// but otherwise, has to be same
export function startApplication() {
  new Screen();
}
