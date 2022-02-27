/// <reference types='cypress'/>

export const buscaLocal = () => {
  var queryStringBuscarLocal = `{
              location(
              id: "03"
              ) {  id
              name
              type
              dimension  
              residents{
                name
              }
              created
            }
        }`;

  return cy.request({
    method: "POST",
    url: "https://rickandmortyapi.com/graphql",
    headers: { "Content-Type": "application/json" },
    body: {
      query: queryStringBuscarLocal,
    },
    failOnStatusCode: false,
  });
};
