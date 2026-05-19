// const shortid = require("shortid");

// const generateCode = () => {
//   return shortid.generate();
// };

// module.exports = generateCode;

const { nanoid } = require("nanoid");

const generateCode = () => {
  return nanoid(6);
};

module.exports = generateCode;