import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUsers: function() {
        return axios.get("https://randomUser.me/api/?results=200&nat=us")
    }
}