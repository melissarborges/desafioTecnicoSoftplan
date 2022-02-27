/// <reference types='cypress'/>

export const buscaEpisodio = (id) => {
  var queryStringBuscarEpisodio = `{
        episode(
        id: "${id}"
        ) {
          name
          air_date
          episode
          characters{
            name
            status
            location{
              name
              dimension
            }
          }
      }
      }`;

  return cy.request({
    method: "POST",
    url: "https://rickandmortyapi.com/graphql",
    body: {
      query: queryStringBuscarEpisodio,
    },
  });
};
