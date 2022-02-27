/// <reference types='cypress'/>

import { buscaEpisodio } from "../support/apiPages/rickAndMortyPage/queries/episodes";
import { buscaPersonagem } from "../support/apiPages/rickAndMortyPage/queries/character";
import { buscaLocal } from "../support/apiPages/rickAndMortyPage/queries/location";

describe("Validar endpoints da API", () => {
  it("buscar um personagem pelo ID e validar pelo nome e espécie", () => {
    cy.fixture("rickAndMorty")
      .as("personagens")
      .then((personagens) => {
        const { personagem } = personagens;
        personagem.forEach((itens) => {
          if (itens.rick) {
            buscaPersonagem(itens.rick.id).then((res) => {
              expect(res.status).to.be.eq(200);
              expect(res.body.data.character.name).to.be.eq(itens.rick.name);
              expect(res.body.data.character.species).to.be.eq(
                itens.rick.species
              );
            });
            return;
          }
          if (itens.arcade) {
            buscaPersonagem(itens.arcade.id).then((res) => {
              expect(res.status).to.be.eq(200);
              expect(res.body.data.character.name).to.be.eq(itens.arcade.name);
              expect(res.body.data.character.species).to.be.eq(
                itens.arcade.species
              );
            });
            return;
          }
        });
      });
  });
  it("buscar um episódio pelo ID e validar pelo nome e data de exibição", () => {
    cy.fixture("rickAndMorty")
      .as("episodios")
      .then((episodios) => {
        const { episodio } = episodios;
        episodio.forEach((itens) => {
          if (itens.pilot) {
            buscaEpisodio(itens.pilot.id).then((res) => {
              expect(res.status).to.be.eq(200);
              expect(res.body.data.episode.name).to.be.eq(itens.pilot.name);
              expect(res.body.data.episode.air_date).to.be.eq(
                itens.pilot.air_date
              );
            });
            return;
          }
          if (itens.rickmurai) {
            buscaEpisodio(itens.rickmurai.id).then((res) => {
              expect(res.status).to.be.eq(200);
              expect(res.body.data.episode.name).to.be.eq(itens.rickmurai.name);
              expect(res.body.data.episode.air_date).to.be.eq(
                itens.rickmurai.air_date
              );
            });
            return;
          }
        });
      });
  });

  it("Buscar um local pelo ID '03' e validar pelo nome", () => {
    buscaLocal().then((res) => {
      expect(res.status).to.be.eq(200);
      expect(res.body.data.location.name).to.be.eq("Citadel of Ricks");
    });
  });
});
