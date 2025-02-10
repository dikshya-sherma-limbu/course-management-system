const app = require("./app");
const port = process.env.PORT || 1111;
const http = require("http");

function startServer(port) {
  const server = http.createServer(app);

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Port ${port} is already in use, trying another port...`);
      startServer(port + 1);
    } else {
      console.error(err);
    }
  });
}

startServer(port);
