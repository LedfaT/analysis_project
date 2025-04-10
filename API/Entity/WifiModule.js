module.exports = (sequelize, Sequelize, DataTypes) => {
  const WifiModule = sequelize.define(
    "WifiModule",
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
      version: {
        type: Sequelize.FLOAT,
        allowNull: true,
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
