"use strict";
/** @type {import('sequelize-cli').Migration} */ module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("computer", "type", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("computer", "name", {
      title: Sequelize.STRING,
      allowNull: true,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("computer", "type");
    await queryInterface.removeColumn("computer", "name");
  },
};
