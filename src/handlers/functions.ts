import * as mysql from 'mysql';
import * as util from 'util';

const getAllItems = async () => {
  const config: mysql.ConnectionConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  };

  const pool = mysql.createPool(config);
  // @ts-ignore
  pool.query = util.promisify(pool.query);
  try {
    const query = `SELECT * FROM ${process.env.RDS_USER_TABLE}`;
    const result = pool.query(query);
    pool.end();
    return result;
  } catch (err) {
    throw new Error;
  }
}

const exec = async () => {
  const users = await getAllItems();
  console.dir(users);
}

export default exec;