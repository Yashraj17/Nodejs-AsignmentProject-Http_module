const http = require('http');
const data = require('./data-store.json')
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    var url = req.url;
    var params = url.slice(9)
    console.log(params);
    // url = url.slice(0,8)
    if (req.url == "/project") {

        res.writeHead(404);
        res.end(`{"message": "Bad Request"}`);
    }
    else{
        if (params !=="") {
            const item = data.filter((val)=>(val.id === parseInt(params)))
            if (item.length !== 0) {
                res.writeHead(200);
                console.log("this is item",item);
                res.end(JSON.stringify(item));
            }
           else{
            res.writeHead(404);
                res.end(`{"message": "Invalid Id Do not Match"}`);
           }
        }
       
    }
    res.end();
});

server.listen(8000);
console.log(`The HTTP Server is running on port 8000`);