const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
    categories: [Category]!
    category(id: ID!): Category
    # Queries for the current user
    me: User
}
type Category{
    icon_url: String
    id: ID
    url: String
    value: String
}
type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    records: [Category]
  }
type Mutation {
    # if false, saving record failed -- check errors
    saveRecord(recordId: ID! recordWhen: String): RecordUpdateResponse!

    # if false, deleting record failed -- check errors
    deleteRecord(recordId: ID!): RecordUpdateResponse!

    login(email: String): String # login token
}

type RecordUpdateResponse {
    success: Boolean!
    message: String
    records: [Category]
}

`;

module.exports = typeDefs;      