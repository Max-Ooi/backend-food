const apiKey = "abdc123";

const auth = (req, res, next) => {
    console.log(req.headers);
    if (req.headers.api_key === apiKey) {
      next();
      return
    }
    res.send("bad API key");
  }


  module.exports = auth; 