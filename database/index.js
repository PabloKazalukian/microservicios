const server = require("./src/server");
// const { Character } = require("./src/database");

const PORT = 8004;

// Character.find()

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
