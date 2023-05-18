import { Pool } from 'pg';

// if (process.env.DB_PASS) {
// config = {
//     user: 'citizenkanine',
//     host: 'db.bit.io',
//     database: 'citizenkanine/citizen_kanine_staging',
//     password: process.env.DB_PASS, // key from bit.io database page connect menu
//     port: 5432,
//     ssl: true,
//   };
// } 
// else {
const config = {
    host: 'localhost', // Server hosting the postgres database
    port: 5432, // env var: PGPORT
    database: 'nextjs_timeline'
  };
// }

const pool = new Pool(config)

pool.on('error', (err) => {
    console.log('Unexpectd error on idle client', err);
    process.exit(-1);
})

export default pool;