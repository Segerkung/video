const axios = require("axios");

module.exports = async () => {
    const { data } = await axio.get("http://jsonplaceholder.typicode.com/posts");

    return data.slice(0, 3);
};