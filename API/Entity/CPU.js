module.exports = (sequelize, Sequelize, DataTypes) => {
  const CPU = sequelize.define(
    "CPU",
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
      Architecture: {
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
    },
    {
      tableName: "cpu",
    }
  );

  return CPU;
};
