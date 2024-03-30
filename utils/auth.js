const jwt = require("jsonwebtoken");

const middle = (req, res, next) => {
  console.log("Inside Middleware");
  if (req.headers.authorization) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    let buff = new Buffer(token, "base64");
    let decoded = buff.toString("utf-8");
    let username = decoded.split(":")[0];
    let password = decoded.split(":")[1];
    console.log(username, password);
    if (username === "admin" && password === "pass") {
      next();
    } else {
      res.status(401).send("Unauthorized");
    }
  } else res.status(401).send("Unauthorized");
};

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 300 });
};

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    if (!token) {
      res.status(401).send("Unauthorized!");
    } else {
      const response = jwt.verify(token, process.env.SECRET_KEY);
      req.role = response.role;
      if (response) {
        next();
      } else {
        res.status(401).send("Unauthorized!");
      }
    }
  } catch (err) {
    res.status(401).send("Unauthorized!");
  }
};

const authorizeSA = (req, res, next) => {
  const role = req.role;
  if (parseInt(role) === 0) {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
};

module.exports = {
  middle,
  generateToken,
  verifyToken,
  authorizeSA,
};
