const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();
const port = 4000;
/**모듈화 완료 */
//묘사
const loadedFiles = loadFilesSync("**/*", {
  extensions: ["graphql"],
});
const schema = makeExecutableSchema({
  typeDefs: loadedFiles,
});

//데이터화
const root = {
  posts: require("./posts/post.model"),
  comments: require("./comments/comments.model"),
};

//사용
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(
    `Running a GraphQL API server at http://localhost:${port}/graphql`
  );
});
