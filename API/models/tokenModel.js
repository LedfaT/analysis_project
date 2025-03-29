module.exports = (sequelize, Sequelize) => {
  const Token = sequelize.define(
    "Token",
    {
      refreshToken: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      tableName: "Token",
    }
  );

  Token.associate = (models) => {
    Token.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };

  return Token;
};
