import http from "http";
import fs from "fs";

const port = 3000;

const htmlFiles = fs.readdirSync("./", { withFileTypes: true });

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    const file = fs.readFileSync("./index.html");
    res.end(file);
  } else if (htmlFiles.find((currFile) => url.includes(currFile.name))) {
    const file = fs.readFileSync(`.${url}`);
    res.end(file);
  } else {
    const file = fs.readFileSync(`./404.html`);
    res.end(file);
  }
});

server.listen(port, () => {
  console.log(`Server running on port  ${port}`);
});
