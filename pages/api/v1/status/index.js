import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  let postgresVersion = await database.query("SELECT version();");
  postgresVersion = postgresVersion.rows[0].version;
  let maxConnections = await database.query("SHOW max_connections;");
  maxConnections = maxConnections.rows[0].max_connections;
  let pgActiveConnections = await database.query(
    "SELECT COUNT(*) FROM pg_stat_activity;",
  );
  pgActiveConnections = pgActiveConnections.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    postgres_version: postgresVersion,
    max_connections: maxConnections,
    opened_connections: pgActiveConnections,
  });
}

export default status;
