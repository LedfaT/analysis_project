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
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.TEXT,
      },
      cores: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      threads: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Architecture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cache: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      clock: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cost: {
        type: DataTypes.FLOAT,
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
