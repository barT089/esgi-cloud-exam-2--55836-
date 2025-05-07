const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

sequelize.authenticate()
  .then(() => {
    console.log(' DB CONNECTED');
    return sequelize.sync();
  })
  .then(() => {
    console.log(' DB SYNC DONE');
  })
  .catch((err) => {
    console.error(' DB CONNECTION ERROR:', err);
  });

module.exports = sequelize;
