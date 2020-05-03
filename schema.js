const { gql } = require('apollo-server-express');
const { UserData } = require('./data-sources/models');

const typeDefs = gql`
"Список возможных цветов"
enum COLOR {
  RED
  GREEN
  BLUE
}

"Пользователь"
type User {
  "Любимый цвет"
  color: COLOR!
  "Полное имя"
  name: String!
  "Скорость выполнения заезда"
  speed: Int!
  "Время выполнения заезда"
  time: Int!
}

type Query {
  "Возвращает страницу рейтинга"
  ratingPage(page: Int!): [User!]!
}
`;

const pageSize = 50;
const resolvers = { 
    Query: { 
        ratingPage: async (obj, args, context, info) => await UserData.paginate({}, {
            page: args.page,
            limit: pageSize,
            sort:  { time: -1 },
            lean: true
        }).then(result => result.docs)
    },
 };

 module.exports = {
     typeDefs,
     resolvers
 }