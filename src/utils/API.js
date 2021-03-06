import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=25&nat=us";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default{
  getUsers: function () {
    return axios.get(BASEURL);
  },
};