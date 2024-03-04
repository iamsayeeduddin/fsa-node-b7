const data = [
  {
    id: 1,
    name: "HTML & CSS Projects",
    price: 500,
    inStock: true,
  },
  {
    id: 2,
    name: "JavaScript",
    price: 800,
    inStock: false,
  },
];

const get = (req, res) => {
  res.status(200);
  res.json(data);
};

module.exports = {
  get,
};
