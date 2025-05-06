module.exports = (sequelize, Sequelize, DataTypes) => {
  const Token = sequelize.define(
    "Token",
    {
      refreshToken: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
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
