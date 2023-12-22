import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const postgresVersionResult = await database.query("SHOW server_version;");
  const postgresVersionValue = postgresVersionResult.rows[0].server_version;

  const maxConnectionsResult = await database.query("SHOW max_connections;");
  const maxConnectionsValue = maxConnectionsResult.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const pgActiveConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const pgActiveConnectionsValue = pgActiveConnectionsResult.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    postgres_version: postgresVersionValue,
    max_connections: parseInt(maxConnectionsValue),
    opened_connections: pgActiveConnectionsValue,
  });
}

export default status;
