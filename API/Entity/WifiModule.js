module.exports = (sequelize, Sequelize, DataTypes) => {
  const WifiModule = sequelize.define(
    "WifiModule",
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
      generation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cost: {
        type: DataTypes.FLOAT,
      },
    },
    {
      tableName: "wifi_module",
    }
  );

  WifiModule.associate = (models) => {
    WifiModule.hasOne(models.Computer, {
      foreignKey: "wifi_module_id",
    });
  };

  return WifiModule;
};
