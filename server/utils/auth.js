const jwt = require("jsonwebtoken");
require('dotenv').config();
// const SECRET = "randomstuff123";
// const EXPIRATION = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    
    let token = req.body.token || req.query.token || req.headers.authorization;
    
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, process.env.SECRET, { maxAge: process.env.EXPIRATION });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, process.env.SECRET, { expiresIn: process.env.EXPIRATION });
  },
};