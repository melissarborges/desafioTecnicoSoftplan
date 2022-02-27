/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  allureWriter(on, config);
  return config;
}
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

