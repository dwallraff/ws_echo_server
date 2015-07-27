var port = (process.env.VCAP_APP_PORT || 8192);
var host = (process.env.VCAP_APP_HOST || 'localhost');
var http = require('http');
var WebSocketServer = require('ws').Server, wss = new WebSocketServer({port: port});
wss.on('connection', function(ws) {
	ws.on('message', function(message) {
		ws.send(message);
		});
	ws.send('Simple WebSocket Echo Serveri1');
});
