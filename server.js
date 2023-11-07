
const express = require('express');
const routes = require('./routes');
const app = express();
const port = 4000;
const cors = require('cors')
const corsPolicy = {
    origin: '*',
    methods: 'GET, POST',
    allowedHeaders: 'Access-Control-Allow-Origin,Access-Control-Allow-Headers , Origin, X-Requested-With, Content-Type, Accept, X-Language, X-Session, x-userTokenId, x-accessId, Pragma, Cache-Control,If-Modified-Since,x-ipaddr'
}

app.use(cors(corsPolicy))

app.use(express.json());

app.use('/api', routes)


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});