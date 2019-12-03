const express = require('express');
const graphqlHTTP = require('express-graphql');
const axios = require('axios');
const schema = require('./schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));