module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "image",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
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
      tableName: "image",
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: false,
    }
  );
};
