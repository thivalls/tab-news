import database from "infra/database.js";

async function error(request, response) {
  const result = await database.query("show");
  console.log("teste");
  if (!result) throw new Error("error in query");
}

export default error;
