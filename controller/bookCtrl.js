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

const getById = (req, res) => {
  const { id } = req.params;
  const book = data.find((val) => val.id === parseInt(id));
  res.status(200).json(book);
};

const addBook = (req, res) => {
  const { body } = req;
  const lastId = data[data.length - 1].id;
  data.push({ ...body, id: lastId + 1 });
  res.status(201).send("Book Added Succesfully");
};

const deleteBook = (req, res) => {
  const { id } = req.params;
  const bookId = data.findIndex((val) => val.id === parseInt(id));
  data.splice(bookId, 1);
  res.status(200).send("Book Deleted Succesfully!");
};

const updateBook = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  data.forEach((val, inx) => {
    if (val.id === parseInt(id)) {
      for (let key in body) {
        data[inx][key] = body[key];
      }
    }
  });
  res.status(200).json(data);
};

module.exports = {
  get,
  getById,
  addBook,
  deleteBook,
  updateBook,
};
