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
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      cores: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
      },
      threads: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vram_quantity: {
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
      vram_type: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      cost: {
        type: DataTypes.FLOAT,
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
