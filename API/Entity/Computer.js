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
      isPublished: {
        type: BOOLEAN,
        default: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      bluetooth_module_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "BluetoothModule",
          key: "id",
        },
      },
      case_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Case",
          key: "id",
        },
      },
      cooling_system_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "CoolingSystem",
          key: "id",
        },
      },
      cpu_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "CPU",
          key: "id",
        },
      },
      gpu_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "GPU",
          key: "id",
        },
      },
      hdd_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "HDD",
          key: "id",
        },
      },
      motherboard_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Motherboard",
          key: "id",
        },
      },
      power_supply_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "PowerSupply",
          key: "id",
        },
      },
      ram_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "RAM",
          key: "id",
        },
      },
      ssd_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "SSD",
          key: "id",
        },
      },
      water_cooling_system_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "WaterCoolingSystem",
          key: "id",
        },
      },
      wifi_module_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "WifiModule",
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

    Computer.belongsTo(models.Case, {
      foreignKey: "case_id",
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
