// Created 2016-06-28 by Jonathan Perry
// This program will setup a simple http server for serving a web page about myself

var http = require('http');
var fs = require('fs');
var url = require('url')
const PORT = 8080
var webPageFile = "webPage.html";
var locale = "utf8"

function handleRequest(request, response) {
	fs.readFile(webPageFile, locale, function (error, data) {
		response.write(data);
		console.log("Page hit!");
		response.end();
	});
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log("Server is listening on: http://localhost:%s", PORT);
});
