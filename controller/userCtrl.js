const userRepo = require("../repositories/userRepo");
const { generateToken } = require("../utils/auth");
const { getHash, comparePass } = require("../utils/crypt");

const createUser = async (req, res) => {
  try {
    const data = req.body;
    data.createdAt = new Date();
    data.password = await getHash(req.body.password);
    await userRepo.post(data);
    res.status(201).send("User Created Successfully!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userRepo.get();
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userRepo.getByEmail(email);
    if (user) {
      const correct = await comparePass(password, user.password);
      if (correct) {
        delete user.password;
        const token = generateToken({ email: user.email, name: user.name });
        res.status(200);
        res.json({
          message: "Login Successfull!",
          token,
          name: user.name,
          email: user.email,
          mobile: user.mobile,
        });
      } else {
        res.status(401).send("Wrong Username or Password!");
      }
    } else {
      res.status(401).send("Wrong Username or Password!");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  signin,
};
