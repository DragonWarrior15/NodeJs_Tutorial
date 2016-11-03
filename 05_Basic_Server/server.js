// code to create a server

// http module is required
var http = require("http");

// request is from them, and the response is from us
function onRequest(request, response){
	console.log('A user made a request' + request.url);
	response.writeHead(200, {"Context-Type":"text/plain"});
	response.write("Here is your data");
	response.end();
};

http.createServer(onRequest).listen(8888);
console.log("Server is now running");