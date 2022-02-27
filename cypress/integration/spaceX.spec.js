/// <reference types = 'cypress'/>

import { criarUsuario } from "../support/apiPages/spaceXPage/mutations/createUsers";
import { deletarUsuario } from "../support/apiPages/spaceXPage/mutations/deleteUsers";
import { atualizarUsuario } from "../support/apiPages/spaceXPage/mutations/updateUsers";
import { lerUsuario } from "../support/apiPages/spaceXPage/queries/users";

describe("Automatizar e validar o GRUD do endpoint de users", () => {
  let users;
  beforeEach(() => {
    users = [
      {
        name: "Melissa",
        rocket: "Softplan 01",
        twitter: "@melissarborges",
      },
    ];
    users.forEach((user) => {
      criarUsuario(user.name, user.rocket, user.twitter);
    });
  });
  it("testar o 'create'", () => {
    criarUsuario("Melissa", "Softplan 01", "@melissarborges").then((res) => {
      expect(res.status).to.be.eq(200);
      expect(res.body.data.insert_users.returning[0].name).to.be.eq("Melissa");
      expect(res.body.data.insert_users.returning[0].rocket).to.be.eq(
        "Softplan 01"
      );
      expect(res.body.data.insert_users.returning[0].twitter).to.be.eq(
        "@melissarborges"
      );
      expect(res.body.data.insert_users.returning.length).to.be.at.least(1);
    });
  });

  it("testar o 'read'", () => {
    users.forEach((user) => {
      if (user.name == "Melissa") {
        lerUsuario().then((res) => {
          res.body.data.users.forEach((userI) => {
            if (userI.name == "Melissa") {
              expect(res.status).to.be.eq(200);
              expect(userI.name).to.be.eq("Melissa");
              expect(userI.rocket).to.contain("Softplan");
              expect(userI.twitter).to.be.eq("@melissarborges");
            }
          });
        });
      }
    });
  });

  it("testar o 'update'", () => {
    atualizarUsuario("Melissa").then((res) => {
      expect(res.status).to.be.eq(200);
      expect(res.body.data.update_users.returning[0].name).to.be.eq(
        "Melissa R"
      );
      expect(res.body.data.update_users.returning.length).to.be.at.least(1);
    });
  });

  it("testar o 'delete'", () => {
    deletarUsuario("Melissa R").then((res) => {
      console.log(res);

      expect(res.status).to.be.eq(200);
      expect(res.body.data.delete_users.affected_rows).to.be.at.least(1);
      expect(res.body.data.delete_users.returning[0].name).to.be.eq("Melissa R");
    });
  });
  });
