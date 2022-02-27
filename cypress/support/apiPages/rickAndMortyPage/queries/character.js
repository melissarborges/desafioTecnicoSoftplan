/// <reference types='cypress'/>

export const buscaPersonagem = (id) => {
  var queryStringBuscarPersonagem = `{
            character(
            id: "${id}"
            )  {
              name
              image
              status
              species
              gender
              created
              episode{
                name
                air_date
                created
              }
              origin{
                name
                dimension
                type
              }
              
            }
                }`;

  return cy.request({
    method: "POST",
    url: "https://rickandmortyapi.com/graphql",
    body: {
      query: queryStringBuscarPersonagem,
    },
  });
};
