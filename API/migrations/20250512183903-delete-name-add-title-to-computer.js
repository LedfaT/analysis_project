"use strict";
/** @type {import('sequelize-cli').Migration} */ module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("computer", "title", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.removeColumn("computer", "name");
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("computer", "title");
  },
};
