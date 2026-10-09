const queryString = require("querystring");

const userData = function (req, resp) {
  resp.write(`<h1>you get data </h1>`);
  let Data = [];
  req.on("data", (chunk) => {
    Data.push(chunk);
  });
  req.on("end", () => {
    let rawData = Buffer.concat(Data).toString();
    let readableData = queryString.parse(rawData);
    console.log(readableData);
  });
};
module.exports = userData;
