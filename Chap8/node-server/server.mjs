import http from "http";

// .\curl -X POST -H "Content-Type: application/json" -d '{"userid": "1", "message": "hello"}' "http://localhost:8000/c"
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  switch (req.url) {
    case `/`:
      res.end(`hello world`);
      break;
    case `/a`:
      res.end(`welcome to route a`);
      break;
    case `/b`:
      res.end(`welcome to route b`);
      break;
    case `/c`:
      if (req.method === "POST") {
        let body = [];
        req.on("data", chunk => body.push(chunk));
        req.on("end", () => {
          const params = Buffer.concat(body);
          console.log("body", params.toString());
          res.end(`You submitted these parameters: ${params.toString()}`);
        });
        break;
      }
      res.end(`welcome to route c`);
      break;
    default:
      res.end(`good bye`);
      break;
  }
  console.log(req);
});

const port = 8000;
server.listen(port, () => console.log(`Server started on port ${port}`));