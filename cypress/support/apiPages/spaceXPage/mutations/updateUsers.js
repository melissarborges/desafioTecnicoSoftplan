/// <reference types='cypress'/>

export const atualizarUsuario = (name) => {
    var mutationUpdateUser = `
    mutation {
        update_users(_set: {name: "Melissa R"}, where: {name: {_eq: "${name}"}}) {
          returning {
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
        query: mutationUpdateUser,
      },
      failOnStatusCode: false,
    });
  };
  