module.exports = {
  client: {
    service: {
      tagName: "graphql",
      name: "hasura",
      url: "http://localhost:8080/v1/graphql",
      // optional headers
      headers: {
        "x-hasura-admin-secret": "hello123",
      },
      // optional disable SSL validation check
      skipSSLValidation: true,
    },
  },
}
