// Title : Handle Request response
// Description: this portion handle request and response
// Autho: Md. Abdul Khalek Raju
// Date: 10 March 2024

// dependencies
const {StringDecoder} = require('string_decoder');
const url = require('url');

// Module Scaffolding
const handler = {};

handler.handleReqRes = (req, res)=>{
    // request handeling
    // get the url parsing

   
    
    // const parseUrl = url.parse(req.url,true);
    // const path = parseUrl.pathname;
    // const trimmedPath = path.replace(/^\/+|\/+$/g,'');
    // const method = req.method.toLowerCase();
    // const queryStringObject = parseUrl.query;
    // const headersObject = req.headers;

    console.log("hello node");
   
    
    // const decoder = new StringDecoder('utf-8');
    // let realData = '';
    // req.on('data',(buffer)=>{
    //     realData += decoder.write(buffer);
    // });

    // req.on('end',()=>{
    //     realData += decoder.end();
    //     console.log(realData);
    // // response handel
    // res.end('hello nodejs ');
    // })
}