module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      user_role: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      isActivated: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      activationLink: {
        type: Sequelize.STRING,
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
      foreignKey: "userId",
    });
  };

  return User;
};
