const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {

    console.log(req.url);

    switch (req.url) {
        case "/":
            res.end("server start.s");
            break;
        case "/home":
            res.end("Welcome To Home Page...");
            break;
        case "/about":
            res.end("Welcome To About Page...");
            break;
        case "/contact":
            res.end("Welcome To Contact Page...");
            break;
        default:""
            res.end("404 error");
    }
})

server.listen(port, () => {
    console.log("start");
})