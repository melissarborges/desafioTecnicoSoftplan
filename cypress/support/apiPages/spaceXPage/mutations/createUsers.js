/// <reference types='cypress'/>

export const criarUsuario = (name, rocket, twitter) => {
  var mutationInsertUser = `
  mutation {
    insert_users(objects: {name: "${name}", rocket: "${rocket}", twitter: "${twitter}"}) {
      returning {
        id
        name
        rocket
        twitter
      }
    }
  }
`;
  return cy.request({
    method: "POST",
    url: "https://api.spacex.land/graphql/",
    headers: { "Content-Type": "application/json" },
    body: {
      query: mutationInsertUser,
    },
    failOnStatusCode: false,
  });
};
