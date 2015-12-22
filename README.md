iVarsa
===================

A very simple Node js application, kind of a PoC, to demonstrate how **Node JS** can be used as a front server in a micro services architecture.

This server will serve the static files and html templates to *Angular 2* and all the api calls will be proxied and redirected to the backend micro services. One such service is here https://github.com/rajendrag/ivarsa-play
Stack
-----------
- Node JS
- Angular JS

Setup
-----------
```
git clone https://github.com/rajendrag/ivarsa.git
cd ivarsa
npm install
```
>On Mac and Linux
```
$ DEBUG=ivarsa:* npm start
```
>On Windows
```
set DEBUG=myapp:* & npm start
```

This will start the server on port 3000, goto http://localhost:3000 to open the applicaiton.

Load Testing
-------------
```
siege -c100 -t1M http://localhost:3000/units
```
This will create 100 concurrent requests and keep hitting the server for 1 minute and gives us the statistics.

Debuggig in Node inspector
-------------------------
- In one ssh session terminal, start the app directly in the foreground with ```node --debug ./bin/www```
- v8 will try to bind to port 5858. You should see this message "debugger listening on port 5858" and NOT this message "Failed to open socket on port 5858, waiting 1000 ms before retrying
- In a separate ssh session terminal , start the node-inspector web server by issuing ```node-inspector``` in the foreground.
- ```http://localhost:8080/debug?port=5858```


Contributers
-----------
- Rajendra
- Santhosh
