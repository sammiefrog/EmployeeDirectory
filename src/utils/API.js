import axios from "axios";

const BASEURL = "https://api.randomuser.me/?results=20";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default{
  getUsers: function () {
    return axios.get(BASEURL);
  },
};