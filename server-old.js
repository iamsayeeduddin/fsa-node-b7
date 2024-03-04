const http = require("http");
const userData = require("./data.json");

const data = ["Book1", "Book2", "Book3"];

const PORT = process.env.PORT || 5000;

function ctrl(req, res) {
  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.write("Welcome to My API!");
      break;

    case "/books":
      res.writeHead(JSON.stringify(data));
      res.write("Welcome to My API!");
      break;

    default:
      res.writeHead(404);
      break;
  }
  res.end();
}

http.createServer(ctrl).listen(PORT);

// 1xx - Informational
// 2xx - Success
// 3xx - Recirected
// 4xx - User Side Error
// 5xx - Server Side Error
