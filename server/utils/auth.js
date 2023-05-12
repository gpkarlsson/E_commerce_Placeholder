require('dotenv').config();
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const EXPIRATION = process.env.EXPIRATION;

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
      const { data } = jwt.verify(token, `${process.env.SECRET}`, { expiresIn: '2h' });
      req.user = data;
    } catch (err) {
      console.log("err");
    }

    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, `${process.env.SECRET}`, { expiresIn: '2h' });
  },
};