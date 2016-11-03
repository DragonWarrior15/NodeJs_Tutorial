// code to create a server

// http module is required
var http = require("http");

// the file module to send files
var fs = require("fs");

// 404 response
function send404Response(response){
	response.writeHead(404, {"Context-Type":"text/plain"});
	response.write("Error 404! Page not found");
	response.end();
};

// handle the request
// request is from them, and the response is from us
function onRequest(request, response){
	// console.log('A user made a request' + request.url);
	// response.writeHead(200, {"Context-Type":"text/plain"});
	// response.write("Here is your data");
	// response.end();
	// check if get request and connecting to homepage
	if(request.method == "GET" && request.url == '/'){
		response.writeHead(200, {"Context-Type":"text/html"});
		fs.createReadStream("./index.html").pipe(response);  // pipe the response through the html object
	}else{
		send404Response(response);
	};
};

http.createServer(onRequest).listen(8888);
console.log("Server is now running");