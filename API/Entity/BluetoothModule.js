module.exports = (sequelize, Sequelize, DataTypes) => {
  const BluetoothModule = sequelize.define(
    "BluetoothModule",
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
      tableName: "bluetooth_module",
    }
  );

  BluetoothModule.associate = (models) => {
    BluetoothModule.hasOne(models.Computer, {
      foreignKey: "bluetooth_module_id",
    });
  };

  return BluetoothModule;
};
