module.exports = (sequelize, DataTypes) => {
  const Tarifa = sequelize.define('Tarifa', {
    plano_id: DataTypes.INTEGER,
    origem: DataTypes.INTEGER,
    destino: DataTypes.INTEGER,
    valor: DataTypes.NUMBER
  });

  Tarifa.associate = (models) => {
    Tarifa.belongsTo(models.Plano, { foreignKey: 'plano_id' });
  }

  return Tarifa;
}