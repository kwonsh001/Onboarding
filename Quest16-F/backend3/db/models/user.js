module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "tb_user",
    {
      user_seq: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(30),
      },
      salt: {
        type: DataTypes.STRING(255),
      },
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "tb_user",
    }
  );

  User.associate = (models) => {
    User.hasMany(models.tb_user_file, {
      foreignKey: "user_seq",
    });
  };

  return User;
};