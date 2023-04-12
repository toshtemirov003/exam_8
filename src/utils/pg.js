import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: "postgres://postgres:9999@localhost:5432/exam",
});

const fetchOne = async (SQL, ...values) => {
  let client = await pool.connect();

  try {
    const {
      rows: [row],
    } = await client.query(SQL, values.length ? values : null);

    return row;
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
};

const fetch = async (SQL, ...values) => {
  let client = await pool.connect();

  try {
    const { rows } = await client.query(SQL, values.length ? values : null);

    return rows;
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
};

export { fetch, fetchOne };
