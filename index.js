'use strict';//error handling, forces us to use valid keywords

const express = require('express'); // requires is a build in node funciton for loading depend...

// invoke express to create our "app"
const app = express();

// define our method with endpoints
app.get('/', (request, response) =>{ // req and res
    console.log('Hello from endpoint!'); // term should log
    response.send('Hello from express!'); // client should see
});

// method for starting our server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});