import axios from "axios";

class JokeApi {
  constructor() {
    this.baseURL = "https://api.chucknorris.io";
    this.axiosObject = axios.create({
      baseURL: this.baseURL,
    });
  }

  async getJokeRandomly() {
    try {
      const jokeResponse = await this.axiosObject.get("/jokes/random");
      console.log(jokeResponse.data.value);
      return jokeResponse.data.value;
    } catch (error) {
      console.log(error.response);
    }
  }
}

export function getJoke() {
  const gotJoke = new JokeApi().getJokeRandomly();
  return gotJoke;
}
