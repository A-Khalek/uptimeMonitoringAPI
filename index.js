// Title : uptime Monitoring API
// Description: A restfull API to monitor up or down time of user defined links.
// Author: Md.Abdul Khalek Raju
// Date: 10 March 2024

// dependencies
const http = require('http');
const url = require('url');
// import * as http from 'http'; //not working

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port:3000
};

// create server
app.createServer = ()=>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port,()=>{
        console.log(`listing to port no ${app.config.port}`);
    });
}

// handle request response
app.handleReqRes =(req, res)=>{
    // request handeling
    // get the url parsing
    const parseUrl = url.parse(req.url,true);
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headersObject = req.headers;

    // response handel
    res.end('hello nodejs');
}

// start the server
app.createServer();