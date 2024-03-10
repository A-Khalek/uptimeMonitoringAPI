// Title : uptime Monitoring API
// Description: A restfull API to monitor up or down time of user defined links.
// Author: Md.Abdul Khalek Raju
// Date: 10 March 2024

// dependencies
const http = require('http');
const  {handelReqRes} = require('./helpers/handelReqRes');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port:3000
};

// create server
app.createServer = ()=>{
    const server = http.createServer(app.handelReqRes);
    server.listen(app.config.port,()=>{
        console.log(`Listing Port no ${app.config.port}`);
    });
}

// handle Request response
app.handelReqRes = handelReqRes;

// start the server
app.createServer();