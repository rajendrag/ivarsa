iVarsa
===================

A very simple Node js application, kind of a PoC, to demonstrate how **Node JS, Angular JS and MySQL** work together.

Stack
-----------
- Node JS
- Angular JS
- MySQL

Setup
-----------
```
git clone https://github.com/rajendrag/ivarsa.git
cd iversa
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
This will create 100 concurrent requests and keep hitting the server for 1 minute and gives us the statistics

Contributers
-----------
- Rajendra
- Santhosh
