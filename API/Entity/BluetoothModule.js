module.exports = (sequelize, Sequelize, DataTypes) => {
  const BluetoothModule = sequelize.define(
    "BluetoothModule",
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
      image: {
        type: DataTypes.TEXT,
      },
      description: {
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
