import { QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('Users', [
      {
        id: '1',
        tabel: '001',
        username: 'Иванова И.И.',
        password: 'admin',
      },
      {
        id: '2',
        tabel: '002',
        username: 'Иванов И.И.',
        password: 'admin',
      },
      {
        id: '3',
        tabel: '003',
        username: 'Куплинов И.И.',
        password: 'admin',
      },
      {
        id: '4',
        tabel: '004',
        username: 'Веселов И.И.',
        password: 'admin',
      },
      {
        id: '5',
        tabel: '005',
        username: 'Смурнов И.И.',
        password: 'admin',
      },
      {
        id: '6',
        tabel: '006',
        username: 'Козлов И.И.',
        password: 'admin',
      },
      {
        id: '7',
        tabel: '007',
        username: 'Попов И.И.',
        password: 'admin',
      },
      {
        id: '8',
        tabel: '008',
        username: 'Смирнов И.И.',
        password: 'admin',
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('Users', {}, {});
  },
};
