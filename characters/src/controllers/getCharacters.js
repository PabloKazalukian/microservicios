const Characters = require("../data");

module.exports = async (req, res) => {
  const { data } = await Characters.list();
  res.status(200).json(data);
};
