module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      tableName: "user",
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: false,
    }
  );
};
