module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('planos', [
      {
        descricao: 'FaleMais 30',
        minutos: 30,
        createdAt: new Date(),
        updatedAt: new Date(),      
      },
      {
        descricao: 'FaleMais 60',
        minutos: 60,
        createdAt: new Date(),
        updatedAt: new Date(),    
      },
      {
        descricao: 'FaleMais 120',
        minutos: 120,
        createdAt: new Date(),
        updatedAt: new Date(),    
      },     
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('planos', null, {});
  }
};
