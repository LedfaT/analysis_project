module.exports = (sequelize, Sequelize, DataTypes) => {
  const Case = sequelize.define(
    "Case",
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
      Fan_included: {
        type: Sequelize.BOOLEAN,
        default: true,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Fan_type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "case",
    }
  );

  return Case;
};
