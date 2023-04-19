require("dotenv").config();
const functions = require("./functions");
const path = require("path");
const created_by = "admin";
const modified_by = "admin";
const port = process.env.port;
const super_admin_id = process.env.super_admin_id;

//DB
let dbconfig = {
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_name,
};

if (process.env.mode == "live") {
  dbconfig = {
    host: process.env.live_db_host,
    user: process.env.live_db_user,
    password: process.env.live_db_password,
    database: process.env.live_db_name,
  };
} else {
  dbconfig = {
    host: process.env.test_db_host,
    user: process.env.test_db_user,
    password: process.env.test_db_password,
    database: process.env.test_db_name,
  };
}
const indexPath = path.resolve(__dirname, "../");

const jwtConfig = {
  secret: process.env.secret || "dd5f3089-40c3-403d-af14-d0c228b05cb4",
  refreshTokenSecret:
    process.env.refreshTokenSecret || "7c4c1c50-3230-45bf-9eae-c9b2e401c767",
  expireTime: process.env.expireTime || "10m",
  refreshTokenExpireTime: process.env.refreshTokenExpireTime || "10m",
};

const BASE_URL = process.env.base_url;
const STATIC_PATH = process.env.static_path || "/static";

module.exports = {
  ...functions,
  super_admin_id,
  modified_by,
  created_by,
  port,
  dbconfig,
  BASE_URL,
  jwtConfig,
  STATIC_PATH,
  indexPath,
};
