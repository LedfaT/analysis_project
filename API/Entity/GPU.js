module.exports = (sequelize, Sequelize, DataTypes) => {
  const GPU = sequelize.define(
    "GPU",
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
      tableName: "gpu",
    }
  );

  GPU.associate = (models) => {
    GPU.hasOne(models.Computer, {
      foreignKey: "gpu_id",
    });
  };

  return GPU;
};
