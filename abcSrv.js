/*Copyright 2015 W.G.Vree
GNU General Public License for more details. <http://www.gnu.org/licenses/gpl.html>.
see http://wim.vree.org/js/
Using "nodejs-websocket", MIT Licence, Copyright 2014 Guilherme Souza
see https://github.com/sitegui/nodejs-websocket
*/
var ws=function(){function l(){p.Readable.call(this)}function q(a,b){var c=this;this.connection=a;this.minSize=b;this.buffer=new Buffer(0);this.hasSent=!1;p.Writable.call(this);this.on("finish",function(){c.connection.readyState===c.connection.OPEN&&c.connection.socket.write(h.createBinaryFrame(c.buffer,!c.connection.server,!c.hasSent,!0));c.connection.outStream=null})}function e(a,b,c){var d=this;b instanceof m?(this.server=b,this.extraHeaders=this.host=this.path=null):(this.server=null,this.path=
b.path,this.host=b.host,this.extraHeaders=b.extraHeaders);this.socket=a;this.readyState=this.CONNECTING;this.buffer=new Buffer(0);this.key=this.outStream=this.frameBuffer=null;this.headers={};a.on("readable",function(){d.doRead()});a.on("error",function(a){d.emit("error",a)});this.server||(b="CleartextStream"===a.constructor.name?"secureConnect":"connect",a.on(b,function(){d.startHandshake()}));b=function(){d.readyState!==d.CONNECTING&&d.readyState!==d.OPEN||d.emit("close",1006,"");d.readyState=this.CLOSED;
d.frameBuffer instanceof l&&(d.frameBuffer.end(),d.frameBuffer=null);d.outStream instanceof q&&(d.outStream.end(),d.outStream=null)};a.once("close",b);a.once("finish",b);r.EventEmitter.call(this);if(c)this.once("connect",c)}function v(){}function m(a,b,c){var d=this;"function"===typeof b&&(c=b,b=void 0);var f=function(a){var b=new e(a,d,function(){d.connections.push(b);b.removeListener("error",v);d.emit("connection",b)});b.on("close",function(){var a=d.connections.indexOf(b);-1!==a&&d.connections.splice(a,
1)});b.on("error",v)};this.socket=a?w.createServer(b,f):x.createServer(b,f);this.socket.on("close",function(){d.emit("close")});this.socket.on("error",function(a){d.emit("error",a)});this.connections=[];r.EventEmitter.call(this);if(c)this.on("connection",c)}function n(a,b,c,d){var f,g;f=d.length;g=new Buffer(2+(126>f?0:65536>f?2:8)+(c?4:0));g[0]=(a?128:0)+b;g[1]=c?128:0;a=2;126>f?g[1]+=f:65536>f?(g[1]+=126,g.writeUInt16BE(f,2),a+=2):(g[1]+=127,g.writeUInt32BE(Math.floor(f/Math.pow(2,32)),2),g.writeUInt32BE(f%
Math.pow(2,32),6),a+=8);if(c){c=new Buffer(4);for(f=0;4>f;f++)g[a+f]=c[f]=Math.floor(256*Math.random());for(f=0;f<d.length;f++)d[f]^=c[f%4]}return g}function k(a,b){a||(a=1<process.argv.length?s.dirname(process.argv[1]):".");this.rootDirectory=a;this.soksrv=b;var c=this;this.srv=A.createServer(function(a,b){c.doRequest(a,b)})}var t=require("util"),r=require("events"),y=require("crypto"),x=require("net"),w=require("tls"),p=require("stream"),z=require("url"),A=require("http"),u=require("fs"),s=require("path");
t.inherits(l,p.Readable);l.prototype._read=function(){};l.prototype.addData=function(a){this.push(a)};l.prototype.end=function(){this.push(null)};t.inherits(q,p.Writable);q.prototype._write=function(a,b,c){this.buffer=Buffer.concat([this.buffer,a],this.buffer.length+a.length);this.buffer.length>=this.minSize?(this.connection.readyState===this.connection.OPEN&&(a=h.createBinaryFrame(this.buffer,!this.connection.server,!this.hasSent,!1),this.connection.socket.write(a,b,c)),this.buffer=new Buffer(0),
this.hasSent=!0,this.connection.readyState!==this.connection.OPEN&&c()):c()};t.inherits(e,r.EventEmitter);e.binaryFragmentation=524288;e.maxBufferLength=2097152;e.prototype.CONNECTING=0;e.prototype.OPEN=1;e.prototype.CLOSING=2;e.prototype.CLOSED=3;e.prototype.sendText=function(a,b){if(this.readyState===this.OPEN){if(!this.outStream)return this.socket.write(h.createTextFrame(a,!this.server),b);this.emit("error",Error("You can't send a text frame until you finish sending binary frames"))}this.emit("error",
Error("You can't write to a non-open connection"))};e.prototype.beginBinary=function(){if(this.readyState===this.OPEN){if(!this.outStream)return this.outStream=new q(this,e.binaryFragmentation);this.emit("error",Error("You can't send more binary frames until you finish sending the previous binary frames"))}this.emit("error",Error("You can't write to a non-open connection"))};e.prototype.sendBinary=function(a,b){if(this.readyState===this.OPEN){if(!this.outStream)return this.socket.write(h.createBinaryFrame(a,
!this.server,!0,!0),b);this.emit("error",Error("You can't send more binary frames until you finish sending the previous binary frames"))}this.emit("error",Error("You can't write to a non-open connection"))};e.prototype.sendPing=function(a){if(this.readyState===this.OPEN)return this.socket.write(h.createPingFrame(a||"",!this.server));this.emit("error",Error("You can't write to a non-open connection"))};e.prototype.close=function(a,b){this.readyState===this.OPEN?(this.socket.write(h.createCloseFrame(a,
b,!this.server)),this.readyState=this.CLOSING):this.readyState!==this.CLOSED&&(this.socket.end(),this.readyState=this.CLOSED);this.emit("close",a,b)};e.prototype.doRead=function(){var a;if(a=this.socket.read())if(this.buffer=Buffer.concat([this.buffer,a],this.buffer.length+a.length),(this.readyState!==this.CONNECTING||this.readHandshake())&&this.readyState!==this.CLOSED){for(;!0===(a=this.extractFrame()););!1===a?this.close(1002):this.buffer.length>e.maxBufferLength&&this.close(1009)}};e.prototype.startHandshake=
function(){var a,b,c;c=new Buffer(16);for(b=0;16>b;b++)c[b]=Math.floor(256*Math.random());this.key=c.toString("base64");b={Host:this.host,Upgrade:"websocket",Connection:"Upgrade","Sec-WebSocket-Key":this.key,"Sec-WebSocket-Version":"13"};for(a in this.extraHeaders)b[a]=this.extraHeaders[a];a=this.buildRequest("GET "+this.path+" HTTP/1.1",b);this.socket.write(a)};e.prototype.readHandshake=function(){var a=!1,b;if(this.buffer.length>e.maxBufferLength)return this.socket.end(this.server?"HTTP/1.1 400 Bad Request\r\n\r\n":
void 0),!1;for(b=0;b<this.buffer.length-3;b++)if(13===this.buffer[b]&&13===this.buffer[b+2]&&10===this.buffer[b+1]&&10===this.buffer[b+3]){a=!0;break}if(!a)return!1;a=this.buffer.slice(0,b+4).toString().split("\r\n");if(this.server?this.answerHandshake(a):this.checkHandshake(a))return this.buffer=this.buffer.slice(b+4),this.readyState=this.OPEN,this.emit("connect"),!0;this.socket.end(this.server?"HTTP/1.1 400 Bad Request\r\n\r\n":void 0);return!1};e.prototype.readHeaders=function(a){var b,c;for(b=
1;b<a.length;b++)if(c=a[b].match(/^([a-z-]+): (.+)$/i))this.headers[c[1].toLowerCase()]=c[2]};e.prototype.checkHandshake=function(a){var b;if(4>a.length||!a[0].match(/^HTTP\/\d\.\d 101( .*)?$/i))return!1;this.readHeaders(a);if(!("upgrade"in this.headers&&"sec-websocket-accept"in this.headers&&"connection"in this.headers)||"websocket"!==this.headers.upgrade.toLowerCase()||-1===this.headers.connection.toLowerCase().split(", ").indexOf("upgrade"))return!1;a=this.headers["sec-websocket-accept"];b=y.createHash("sha1");
b.end(this.key+"258EAFA5-E914-47DA-95CA-C5AB0DC85B11");return a!==b.read().toString("base64")?!1:!0};e.prototype.answerHandshake=function(a){var b;if(6>a.length)return!1;b=a[0].match(/^GET (.+) HTTP\/\d\.\d$/i);if(!b)return!1;this.path=b[1];this.readHeaders(a);if(!("host"in this.headers&&"sec-websocket-key"in this.headers&&"upgrade"in this.headers&&"connection"in this.headers)||"websocket"!==this.headers.upgrade.toLowerCase()||-1===this.headers.connection.toLowerCase().split(", ").indexOf("upgrade")||
"13"!==this.headers["sec-websocket-version"])return!1;this.key=this.headers["sec-websocket-key"];a=y.createHash("sha1");a.end(this.key+"258EAFA5-E914-47DA-95CA-C5AB0DC85B11");a=a.read().toString("base64");this.socket.write(this.buildRequest("HTTP/1.1 101 Switching Protocols",{Upgrade:"websocket",Connection:"Upgrade","Sec-WebSocket-Accept":a}));return!0};e.prototype.extractFrame=function(){var a,b,c,d,f,g,e;if(!(2>this.buffer.length)){c=this.buffer[0];a=c>>4;if(a%8)return!1;a=8===a;b=c%16;if(0!==b&&
1!==b&&2!==b&&8!==b&&9!==b&&10!==b||8<=b&&!a)return!1;c=this.buffer[1];d=c>>7;if(this.server&&!d||!this.server&&d)return!1;c%=128;g=d?6:2;if(!(this.buffer.length<g+c||(126===c?(c=this.buffer.readUInt16BE(2),g+=2):127===c&&(c=this.buffer.readUInt32BE(2)*Math.pow(2,32)+this.buffer.readUInt32BE(6),g+=8),this.buffer.length<g+c))){f=this.buffer.slice(g,g+c);if(d)for(d=this.buffer.slice(g-4,g),e=0;e<f.length;e++)f[e]^=d[e%4];this.buffer=this.buffer.slice(g+c);return this.processFrame(a,b,f)}}};e.prototype.processFrame=
function(a,b,c){if(8===b)return this.readyState===this.CLOSING?this.socket.end():this.readyState===this.OPEN&&this.processCloseFrame(c),!0;if(9===b)return this.readyState===this.OPEN&&this.socket.write(h.createPongFrame(c.toString(),!this.server)),!0;if(10===b)return this.emit("pong",c.toString()),!0;if(this.readyState!==this.OPEN)return!0;if(0===b&&null===this.frameBuffer||0!==b&&null!==this.frameBuffer)return!1;b||(b="string"===typeof this.frameBuffer?1:2);1===b?(c=c.toString(),this.frameBuffer=
this.frameBuffer?this.frameBuffer+c:c,a&&(this.emit("text",this.frameBuffer),this.frameBuffer=null)):(this.frameBuffer||(this.frameBuffer=new l,this.emit("binary",this.frameBuffer)),this.frameBuffer.addData(c),a&&(this.frameBuffer.end(),this.frameBuffer=null));return!0};e.prototype.processCloseFrame=function(a){var b;2<=a.length?(b=a.readUInt16BE(0),a=a.slice(2).toString()):(b=1005,a="");this.socket.write(h.createCloseFrame(b,a,!this.server));this.readyState=this.CLOSED;this.emit("close",b,a)};e.prototype.buildRequest=
function(a,b){var c=a+"\r\n",d;for(d in b)c+=d+": "+b[d]+"\r\n";return c+"\r\n"};t.inherits(m,r.EventEmitter);m.prototype.listen=function(a,b,c){var d=this;"function"===typeof b&&(c=b,b=void 0);if(c)this.on("listening",c);this.socket.listen(a,b,function(){d.emit("listening")});return this};m.prototype.close=function(){for(;this.connections.length;)this.connections[0].close();this.socket.close()};var h={createTextFrame:function(a,b){var c,d;c=new Buffer(a);d=n(!0,1,void 0===b?!1:b,c);return Buffer.concat([d,
c],d.length+c.length)},createBinaryFrame:function(a,b,c,d){var f;c=void 0===c?!0:c;(b=void 0===b?!1:b)?(f=new Buffer(a.length),a.copy(f)):f=a;a=n(void 0===d?!0:d,c?2:0,b,f);return Buffer.concat([a,f],a.length+f.length)},createCloseFrame:function(a,b,c){void 0!==a&&1005!==a?(b=new Buffer(void 0===b?"--":"--"+b),b.writeUInt16BE(a,0)):b=new Buffer(0);a=n(!0,8,void 0===c?!1:c,b);return Buffer.concat([a,b],a.length+b.length)},createPingFrame:function(a,b){var c,d;c=new Buffer(a);d=n(!0,9,void 0===b?!1:
b,c);return Buffer.concat([d,c],d.length+c.length)},createPongFrame:function(a,b){var c,d;c=new Buffer(a);d=n(!0,10,void 0===b?!1:b,c);return Buffer.concat([d,c],d.length+c.length)}};k.prototype.lookupMimeType=function(a){a=s.extname(a).toLowerCase();var b={".png":"image/png",".jpg":"image/jpg",".jpeg":"image/jpg",".webm":"video/webm",".mp4":"video/mpeg",".ogg":"audio/ogg",".mp3":"audio/mpeg",".html":"text/html",".css":"text/css",".js":"text/javascript"};return a in b?b[a]:"text/plain"};k.prototype.serveString=
function(a,b){console.log(b);a.writeHead(404,{"Content-Type":"text/html"});a.end(b)};k.prototype.servePath=function(a,b){var c=this,d=s.join(this.rootDirectory,a);console.log("Request: "+a);u.stat(d,function(f,e){f?c.serveString(b,"cannot stat file: "+a):e.isDirectory()?c.serveDir(d,a,b):e.isFile()?c.serveFile(d,a,b):c.serveString(b,"file type not supported: "+a)})};k.prototype.serveFile=function(a,b,c){var d=this,f=this.lookupMimeType(a);u.readFile(a,function(a,e){a?d.serveString(c,"read error file: "+
b):(c.writeHead(200,{"Content-Type":f}),c.end(e))})};k.prototype.serveDir=function(a,b,c){var d=this;u.readdir(a,function(a,e){if(a)d.serveString(c,"read error dir: "+b);else{var h=e.map(function(a){a=s.join(b,a);return"<li><a href="+a+">"+a+"</a><br></li>"}).join("\n");c.writeHead(200,{"Content-Type":"text/html"});c.end('<!DOCTYPE HTML><html><head><meta charset="utf-8"></head><body>\nDirectory listing:<ol>\n'+h+"\n</ol></body></html>")}})};k.prototype.doRequest=function(a,b){var c=z.parse(a.url).pathname;
"/stop"==c?(this.serveString(b,"Server closed"),this.soksrv&&this.soksrv.close(),this.srv.close(),console.log("web server closed")):this.servePath(c,b)};return{createServer:function(a,b){return"function"!==typeof a&&arguments.length?new m(Boolean(a.secure),a,b):new m(!1,a)},connect:function(a,b,c){"function"===typeof b&&(c=b,b=void 0);b=b||{};var d;a=z.parse(a);a.protocol=a.protocol||"ws:";if("ws:"===a.protocol)d=!1;else if("wss:"===a.protocol)d=!0;else throw Error("Invalid protocol "+a.protocol+
". It must be ws or wss");a.port=a.port||(d?443:80);a.path=a.path||"/";a={path:a.path,port:a.port,secure:d,host:a.hostname};b.port=a.port;b.host=a.host;b.hasOwnProperty("extraHeaders")&&(a.extraHeaders=b.extraHeaders);b=a.secure?w.connect(b):x.connect(b);return new e(b,a,c)},setBinaryFragmentation:function(a){e.binaryFragmentation=a},setMaxBufferLength:function(a){e.maxBufferLength=a},mkWebServer:function(a,b){return new k(a,b)}}}();
var master = null;
var soksrv = ws.createServer (function (conn) {
    console.log ("new connection")
    conn.on ("text", function (str) {
        console.log ("received " + str);
        if (str == 'master') { master = conn; conn.sendText ('master'); return; }
        if (master && master != conn) { console.log ('rejected: ' + str); return; }
        soksrv.connections.forEach (function (bcon) {
            bcon.sendText (str);
        });
        if (str.indexOf ('stop') >= 0) soksrv.close ();
    });
    conn.on ("close", function (code, reason) {
        console.log ("connection closed");
        if (master == conn) { master = null; console.log ('master cleared'); };
    });
});
soksrv.on ('close', function () { console.log ('socket server closed'); });

// when your ip-number is not set automatically change 'localhost'
// to the ip-number of the device where touch_code is running
var port = 8090
var host = 'localhost'
var os = require ('os');
var ifs = host == 'localhost' ? os.networkInterfaces () : {} ;
for (var k in ifs) {
    for (var i = 0; i < ifs [k].length; ++i) {
        var adr = ifs [k][i].address;   // interface k, protocol i
        var n = adr.match (/(\d+)\.(\d+)\.(\d+)\.(\d+)/);    
        if (!n) continue;
        if (n [1] == '10') host = adr;
        if (n [1] == '192' && n [2] == '168') host = adr;
        if (n [1] == '172' && parseInt (n [2]) > 15)  host = adr;
    };
}
soksrv.listen (port + 1, host);
console.log ('websocket server listening on port: ' + (port + 1) + ', address: ' + host)
// create webserver
var wsrv = ws.mkWebServer ('', soksrv);
wsrv.srv.listen (port, host);
wsrv.srv.setTimeout (2000);
console.log ('http server listening in port: ' + port + ', adress: ' + host)
console.log ('web server root directory: ' + wsrv.rootDirectory);

process.on ('ApplicationDidEnterBackground', function () { wsrv.srv.close (); soksrv.close (); });
process.on ('ApplicationWillEnterForeground', function () { wsrv.srv.listen (wsrv.port, wsrv.host); soksrv.listen (port, host); });
