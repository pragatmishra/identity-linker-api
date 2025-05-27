import config from "./config";
import process from "process";

const env = process.env.NODE_ENV || "development";

let database = config.dbName ?? "default_db_name";

switch (env) {
  case "development":
    database = database + "_dev";
    break;
  case "test":
    database = database + "_test";
    break;
  case "production":
    // Don't append "_prod" — use DB name as-is
    break;
  default:
    database = database + "_dev";
}


export default {
  username: config.dbUsername,
  password: config.dbPassword,
  database,
  host: config.dbHostname,
  dialect: config.dialect,
  logging: false,
  seederStorage: "sequelize",
};

module.exports = {
  username: config.dbUsername,
  password: config.dbPassword,
  database,
  host: config.dbHostname,
  dialect: config.dialect,
  logging: false,
  seederStorage: "sequelize",
};
