module.exports = (sequelize, Sequelize, DataTypes) => {
  const CPU = sequelize.define(
    "CPU",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cores: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      threads: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Architecture: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cache: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      clock: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "cpu",
    }
  );

  CPU.associate = (models) => {
    CPU.hasOne(models.Computer, {
      foreignKey: "cpu_id",
    });
  };

  return CPU;
};
