module.exports = (sequelize, Sequelize, DataTypes) => {
  const GPU = sequelize.define(
    "GPU",
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
      vram_quantity: {
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
      vram_type: {
        type: Sequelize.SMALLINT,
        allowNull: false,
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
