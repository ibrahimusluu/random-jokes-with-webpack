import { MY_UNSPLASH_API_ACCESS_KEY } from "./env.js";
import axios from "axios";

class UnsplashApi {
  constructor() {
    this.baseURL = "https://api.unsplash.com";
    this.clientID = `Client-ID ${MY_UNSPLASH_API_ACCESS_KEY}`; // key should be written in "Local JS Environment"
    this.axiosObject = axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: this.clientID,
      },
      params: {
        query: "animal",
        count: 1,
      },
    });
  }

  async getImageRandomly() {
    // console.log(MY_UNSPLASH_API_ACCESS_KEY); // Test of Local Env JS File
    try {
      const imageResponse = await this.axiosObject.get("/photos/random");
      console.log(imageResponse.data[0].urls.regular);
      return imageResponse.data[0].urls.regular;
    } catch (error) {
      console.log(error.response);
      // default image if there is a problem with the request limit of Unsplash API
      return "https://bulma.io/images/placeholders/1280x960.png";
    }
  }
}

// default usage; once can be used at most in this file
export function getImage() {
  const gotImage = new UnsplashApi().getImageRandomly();
  return gotImage;
}
