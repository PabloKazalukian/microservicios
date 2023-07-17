const Planets = require("../data");

module.exports = async (req, res) => {
  const { data } = await Planets.list();
  // console.log(planets.data);
  res.status(200).json(data);
};
