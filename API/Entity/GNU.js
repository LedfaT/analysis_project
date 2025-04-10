module.exports = (sequelize, Sequelize, DataTypes) => {
  const GNU = sequelize.define(
    "GNU",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cores: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      threads: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      vram_quantity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cache: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      clock: {
        type: Sequelize.INTEGER,
      },
      vram_type: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: "gnu",
    }
  );

  return GNU;
};
