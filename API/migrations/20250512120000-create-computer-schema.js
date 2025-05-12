"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, TEXT, FLOAT, BOOLEAN, SMALLINT } = Sequelize;

    // User
    await queryInterface.createTable("User", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      email: { type: STRING, allowNull: false, unique: true },
      password: { type: STRING, allowNull: false },
      username: { type: STRING },
      user_role: { type: STRING },
      isActivated: { type: BOOLEAN, defaultValue: false },
      activationLink: { type: STRING },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
    });

    // Token
    await queryInterface.createTable("Token", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      refreshToken: { type: TEXT, allowNull: false },
      userId: {
        type: INTEGER,
        allowNull: false,
        references: { model: "User", key: "id" },
        onDelete: "CASCADE",
      },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
    });

    // Создаем комплектующие
    const components = [
      [
        "bluetooth_module",
        {
          title: STRING,
          image: TEXT,
          description: TEXT,
          generation: STRING,
          cost: FLOAT,
        },
      ],
      [
        "cooling_system",
        {
          title: STRING,
          image: TEXT,
          description: TEXT,
          type_size: SMALLINT,
          heat_removal: STRING,
          cost: FLOAT,
        },
      ],
      [
        "cpu",
        {
          title: STRING,
          description: TEXT,
          image: TEXT,
          cores: STRING,
          threads: STRING,
          Architecture: STRING,
          cache: STRING,
          clock: STRING,
          cost: FLOAT,
        },
      ],
      [
        "gpu",
        {
          title: STRING,
          description: TEXT,
          image: TEXT,
          cores: STRING,
          threads: STRING,
          vram_quantity: STRING,
          cache: STRING,
          clock: STRING,
          vram_type: SMALLINT,
          cost: FLOAT,
        },
      ],
      [
        "hdd",
        {
          title: STRING,
          description: TEXT,
          image: TEXT,
          memory_quantity: STRING,
          reading_speed: STRING,
          write_speed: STRING,
          cost: FLOAT,
        },
      ],
      [
        "motherboard",
        {
          title: STRING,
          description: TEXT,
          image: TEXT,
          chipset: STRING,
          type_size: SMALLINT,
          socket: STRING,
          cost: FLOAT,
        },
      ],
      [
        "power_supply",
        {
          title: STRING,
          description: TEXT,
          image: TEXT,
          strength: INTEGER,
          sertificate: STRING,
          cost: FLOAT,
        },
      ],
      [
        "ram",
        {
          title: STRING,
          description: TEXT,
          image: TEXT,
          memory_quantity: STRING,
          memory_type: SMALLINT,
          radiator_type: SMALLINT,
          cost: FLOAT,
        },
      ],
      [
        "ssd",
        {
          title: STRING,
          description: TEXT,
          image: TEXT,
          memory_quantity: STRING,
          radiator_type: SMALLINT,
          reading_speed: STRING,
          write_speed: STRING,
          cost: FLOAT,
        },
      ],
      [
        "tower",
        {
          title: STRING,
          description: TEXT,
          image: TEXT,
          fan_included: BOOLEAN,
          type_size: SMALLINT,
          fan_type: SMALLINT,
          cost: FLOAT,
        },
      ],
      [
        "water_cooling_system",
        {
          title: STRING,
          description: TEXT,
          image: TEXT,
          type_size: SMALLINT,
          heat_removal: STRING,
          cost: FLOAT,
        },
      ],
      [
        "wifi_module",
        {
          title: STRING,
          description: TEXT,
          image: TEXT,
          generation: STRING,
          cost: FLOAT,
        },
      ],
    ];

    for (const [name, fields] of components) {
      await queryInterface.createTable(name, {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        ...fields,
        createdAt: { type: Sequelize.DATE },
        updatedAt: { type: Sequelize.DATE },
      });
    }

    // Computer (в самом конце, т.к. зависит от всех)
    await queryInterface.createTable("computer", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      description: TEXT,
      image: TEXT,
      isPublished: { type: BOOLEAN, defaultValue: false },
      cost: FLOAT,
      user_id: {
        type: INTEGER,
        allowNull: false,
        references: { model: "User", key: "id" },
        onDelete: "CASCADE",
      },
      bluetooth_module_id: {
        type: INTEGER,
        allowNull: false,
        references: { model: "bluetooth_module", key: "id" },
      },
      tower_id: {
        type: INTEGER,
        allowNull: false,
        references: { model: "tower", key: "id" },
      },
      cooling_system_id: {
        type: INTEGER,
        allowNull: false,
        references: { model: "cooling_system", key: "id" },
      },
      cpu_id: {
        type: INTEGER,
        allowNull: false,
        references: { model: "cpu", key: "id" },
      },
      gpu_id: {
        type: INTEGER,
        allowNull: false,
        references: { model: "gpu", key: "id" },
      },
      hdd_id: {
        type: INTEGER,
        allowNull: false,
        references: { model: "hdd", key: "id" },
      },
      motherboard_id: {
        type: INTEGER,
        allowNull: false,
        references: { model: "motherboard", key: "id" },
      },
      power_supply_id: {
        type: INTEGER,
        allowNull: false,
        references: { model: "power_supply", key: "id" },
      },
      ram_id: {
        type: INTEGER,
        allowNull: false,
        references: { model: "ram", key: "id" },
      },
      ssd_id: {
        type: INTEGER,
        allowNull: false,
        references: { model: "ssd", key: "id" },
      },
      water_cooling_system_id: {
        type: INTEGER,
        allowNull: false,
        references: { model: "water_cooling_system", key: "id" },
      },
      wifi_module_id: {
        type: INTEGER,
        allowNull: false,
        references: { model: "wifi_module", key: "id" },
      },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("computer");
    await queryInterface.dropTable("wifi_module");
    await queryInterface.dropTable("water_cooling_system");
    await queryInterface.dropTable("tower");
    await queryInterface.dropTable("ssd");
    await queryInterface.dropTable("ram");
    await queryInterface.dropTable("power_supply");
    await queryInterface.dropTable("motherboard");
    await queryInterface.dropTable("hdd");
    await queryInterface.dropTable("gpu");
    await queryInterface.dropTable("cpu");
    await queryInterface.dropTable("cooling_system");
    await queryInterface.dropTable("bluetooth_module");
    await queryInterface.dropTable("Token");
    await queryInterface.dropTable("User");
  },
};
