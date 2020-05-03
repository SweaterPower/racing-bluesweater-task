const { ApolloServer } = require('apollo-server-express');
const express = require('express');
require('./data-sources/config');
const { typeDefs, resolvers } = require('./schema');

const app = express();
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app });

app.get('/', (_req, res, _next) => res.sendFile("view.html", { root: __dirname+"/public" }));

app.listen(3000, () => {
    console.log(`express listening on port 3000...`);
    console.log(`graphql available at ${apolloServer.graphqlPath}...`);
});