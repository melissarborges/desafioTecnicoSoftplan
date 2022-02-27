/// <reference types='cypress'/>

describe("Tickets", () => {
  const itens = ["coisa1", "coisa2", "coisa3", "coisa4", "coisa5"];
  beforeEach(() => {
    itens.forEach((item) => {
      cy.visit("https://todomvc.com/examples/typescript-react/#/completed");
      cy.get(".new-todo").type(`${item} {enter}`);
    });
    cy.get("a[href='#/']").click();
  });

  it("verificar itens cadastrados na lista", () => {
    itens.forEach((item, index) => {
      cy.get("div>label").eq(index).should("have.text", item);
    });
  });

  it("excluir itens da lista", () => {
    cy.get(".todo-list li").each((itens) => {
      const coisa = itens.find("div>label").text();
      const remover = itens.find("div button[class=destroy]");

      if (coisa === "coisa1" || coisa === "coisa3") {
        cy.wrap(remover).click({ force: true });
        cy.log(`${coisa} foi removido`);
        return;
      }
    });
    cy.get(".todo-list").should("not.contain.text", "coisa1");
    cy.get(".todo-list").should("not.contain.text", "coisa3");

    // itens.forEach((item, index) => {
    //   if (item == "coisa1" || item == "coisa2") {
    //       cy.get()
    //     cy.get(".destroy").eq(index).click({ force: true });
    //   }
    // });
  });
  it("marcar um item como completo", () => {
    cy.get("div> input[type=checkbox]").first().click();
    cy.log("item foi marcado como concluído");
    cy.get(".completed > .view > label").should("exist");

    // cy.get(".todo-list li").each((itens) => {
    //   cy.get(
    //     "body > section > div > section > ul > li:nth-child(1) > div > input"
    //   ).click();
    // });
  });

  it("Selecionar o filtro Active", () => {
    cy.get("[data-reactid='.0.2.1.2'] > a").click();
    cy.get('a[href="#/active"]').should("have.attr", "class", "selected");
  });

  //   it("Selecionar o filtro Completed", () => {
  //     cy.get('[data-reactid=".0.2.1.4"] > a').click();
  //     cy.get('a[href="#/active"]').should("have.attr", "class", "selected");
  //   });

  it("Estando com o filtro All ativo clicar em Clear completed", () => {
    cy.get("div> input[type=checkbox]").first().click();
    cy.log("item foi marcado como concluído");

    cy.get(".clear-completed").click();
    cy.get(".todo-list").should("not.contain.text", "coisa1");
  });
});
