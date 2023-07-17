const axios = require("axios");

module.exports = {
  list: async () => {
    return await axios.get("http://database:8004/Character");
  },
  created: async () => {
    throw Error("ocurrio un error en la BDD");
  },
};
