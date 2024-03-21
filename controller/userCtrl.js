const userRepo = require("../repositories/userRepo");

const createUser = async (req, res) => {
  try {
    const data = req.body;
    data.createdAt = new Date();
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

module.exports = {
  createUser,
  getAllUsers,
};
