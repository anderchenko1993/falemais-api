module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tarifas', [
      {
        plano_id: 1,
        origem: '011',
        destino: '016',
        valor: 1.90,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 1,
        origem: '011',
        destino: '017',
        valor: 1.70,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 1,
        origem: '011',
        destino: '018',
        valor: 1.75,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 2,
        origem: '011',
        destino: '016',
        valor: 1.98,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 2,
        origem: '011',
        destino: '017',
        valor: 1.50,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 2,
        origem: '011',
        destino: '018',
        valor: 1.45,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 3,
        origem: '011',
        destino: '016',
        valor: 1.76,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 3,
        origem: '011',
        destino: '017',
        valor: 2.02,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 3,
        origem: '011',
        destino: '018',
        valor: 1.21,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 1,
        origem: '016',
        destino: '011',
        valor: 2.90,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 1,
        origem: '016',
        destino: '017',
        valor: 1.11,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 1,
        origem: '016',
        destino: '018',
        valor: 1.31,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 2,
        origem: '016',
        destino: '011',
        valor: 1.88,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 2,
        origem: '016',
        destino: '017',
        valor: 1.87,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 2,
        origem: '016',
        destino: '018',
        valor: 2.02,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 3,
        origem: '016',
        destino: '011',
        valor: 2.07,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 3,
        origem: '016',
        destino: '017',
        valor: 1.44,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 3,
        origem: '016',
        destino: '018',
        valor: 1.05,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 1,
        origem: '017',
        destino: '011',
        valor: 1.85,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 1,
        origem: '017',
        destino: '016',
        valor: 1.87,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 1,
        origem: '017',
        destino: '018',
        valor: 1.65,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 2,
        origem: '017',
        destino: '011',
        valor: 1.03,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 2,
        origem: '017',
        destino: '016',
        valor: 1.91,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 2,
        origem: '017',
        destino: '018',
        valor: 1.50,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 3,
        origem: '017',
        destino: '011',
        valor: 1.99,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 3,
        origem: '017',
        destino: '016',
        valor: 2.05,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 3,
        origem: '017',
        destino: '018',
        valor: 0.80,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 1,
        origem: '018',
        destino: '011',
        valor: 1.55,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 1,
        origem: '018',
        destino: '016',
        valor: 1.01,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 1,
        origem: '018',
        destino: '017',
        valor: 1.89,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 2,
        origem: '018',
        destino: '011',
        valor: 1.02,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 2,
        origem: '018',
        destino: '016',
        valor: 1.67,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 2,
        origem: '018',
        destino: '017',
        valor: 1.24,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 3,
        origem: '018',
        destino: '011',
        valor: 1.67,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 3,
        origem: '018',
        destino: '016',
        valor: 2.14,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        plano_id: 3,
        origem: '018',
        destino: '017',
        valor: 1.98,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tarifas', null, {});
  }
};
