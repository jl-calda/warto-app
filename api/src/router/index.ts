import express from "express";

import authentication from "./authentication";
import users from "./users";
import rooms from "./rooms";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  rooms(router);
  return router;
};
