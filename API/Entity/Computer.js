module.exports = (sequelize, Sequelize, DataTypes) => {
  const Computer = sequelize.define(
    "Computer",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      description: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.TEXT,
      },
      isPublished: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      cost: {
        type: DataTypes.FLOAT,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      bluetooth_module_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "bluetooth_module",
          key: "id",
        },
      },
      tower_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "tower",
          key: "id",
        },
      },
      cooling_system_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "cooling_system",
          key: "id",
        },
      },
      cpu_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "cpu",
          key: "id",
        },
      },
      gpu_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "gpu",
          key: "id",
        },
      },
      hdd_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "hdd",
          key: "id",
        },
      },
      motherboard_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "motherboard",
          key: "id",
        },
      },
      power_supply_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "power_supply",
          key: "id",
        },
      },
      ram_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "ram",
          key: "id",
        },
      },
      ssd_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "ssd",
          key: "id",
        },
      },
      water_cooling_system_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "water_cooling_system",
          key: "id",
        },
      },
      wifi_module_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "wifi_module",
          key: "id",
        },
      },
    },
    {
      tableName: "computer",
    }
  );

  Computer.associate = (models) => {
    Computer.belongsTo(models.User, {
      foreignKey: "user_id",
    });
    Computer.belongsTo(models.BluetoothModule, {
      foreignKey: "bluetooth_module_id",
    });
    Computer.belongsTo(models.Tower, {
      foreignKey: "tower_id",
    });
    Computer.belongsTo(models.CoolingSystem, {
      foreignKey: "cooling_system_id",
    });
    Computer.belongsTo(models.CPU, {
      foreignKey: "cpu_id",
    });
    Computer.belongsTo(models.GPU, {
      foreignKey: "gpu_id",
    });
    Computer.belongsTo(models.HDD, {
      foreignKey: "hdd_id",
    });
    Computer.belongsTo(models.Motherboard, {
      foreignKey: "motherboard_id",
    });
    Computer.belongsTo(models.PowerSupply, {
      foreignKey: "power_supply_id",
    });
    Computer.belongsTo(models.RAM, {
      foreignKey: "ram_id",
    });
    Computer.belongsTo(models.SSD, {
      foreignKey: "ssd_id",
    });
    Computer.belongsTo(models.WaterCoolingSystem, {
      foreignKey: "water_cooling_system_id",
    });
    Computer.belongsTo(models.WifiModule, {
      foreignKey: "wifi_module_id",
    });
  };

  return Computer;
};
