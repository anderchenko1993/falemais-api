module.exports = (sequelize, DataTypes) => {
  const Plano = sequelize.define('Plano', {
    descricao: DataTypes.STRING,
    minutos: DataTypes.INTEGER
  });

  return Plano;
}