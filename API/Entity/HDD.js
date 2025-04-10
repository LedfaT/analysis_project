module.exports = (sequelize, Sequelize, DataTypes) => {
  const HDD = sequelize.define(
    "HDD",
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
      memory_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      reading_speed: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      write_speed: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "hdd",
    }
  );

  return HDD;
};
