module.exports = (sequelize, Sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_role: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isActivated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      activationLink: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "User",
    }
  );

  User.associate = (models) => {
    User.hasOne(models.Token, {
      foreignKey: "userId",
    });

    User.hasOne(models.Computer, {
      foreignKey: "user_id",
    });
  };

  return User;
};
