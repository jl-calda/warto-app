import { getRooms } from "db/room";
import express from "express";

import {
  registerRoom,
  updateRoom,
  getRoom,
  deleteRoom,
  getAllRooms,
} from "../controllers/rooms";
import { isAuthenticated, isOwner } from "../middlewares";

export default (router: express.Router) => {
  router.get("/rooms", isAuthenticated, getAllRooms);
  router.get("/rooms/:id", isAuthenticated, getRoom);
  router.delete("/rooms/:id", isAuthenticated, deleteRoom);
  router.post("/rooms/post", isAuthenticated, registerRoom);
  router.patch("/rooms/:id", isAuthenticated, updateRoom);
};
