/// <reference types = 'cypress' />

export const lerUsuario = () => {
  var queryReadUsuario = `
   {
    users {
      name
      rocket
      twitter
    }
  }
  `;
  return cy.request({
    method: "POST",
    url: "https://api.spacex.land/graphql/",
    headers: { "Content-Type": "application/json" },
    body: {
      query: queryReadUsuario,
    },
    failOnStatusCode: false,
  });
};
