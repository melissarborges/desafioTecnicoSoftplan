/// <reference types='cypress'/>

export const deletarUsuario = (name) => {
    var mutationDeleteUser = `
    mutation {
        delete_users(where: {name: {_eq: "${name}"}}) {
          returning {
            name
            rocket
            twitter
          }
          affected_rows
        }
      }
      
      
  `;
    return cy.request({
      method: "POST",
      url: "https://api.spacex.land/graphql/",
      headers: { "Content-Type": "application/json" },
      body: {
        query: mutationDeleteUser,
      },
      failOnStatusCode: false,
    });
  };
  