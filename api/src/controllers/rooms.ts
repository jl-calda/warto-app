import express from "express";
import { get } from "lodash";

import { createRoom, getRoomById, getRooms } from "../db/room";

export const registerRoom = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const {
      title,
      description,
      price,
      status,
      images,
      currency,
      availableDate,
      address,
      notes,
    } = req.body;

    if (
      !title ||
      !description ||
      !price ||
      !currency ||
      !availableDate ||
      !address
    ) {
      return res.sendStatus(400);
    }
    //Create user
    const room = await createRoom({
      userId: get(req, "identity._id") as string,
      title,
      images,
      status,
      description,
      price,
      currency,
      availableDate,
      address: {
        "block-number": address["block-number"],
        "postal-code": address["postal-code"],
        "unit-number": address["unit-number"],
      },
      notes,
    });

    return res.status(200).json(room).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateRoom = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const {
      title,
      description,
      status,
      price,
      currency,
      availableDate,
      address,
      notes,
    } = req.body;
    const roomId = req.params.id;

    const existingRoom = await getRoomById(roomId);
    if (!existingRoom) {
      return res.sendStatus(400);
    }
    const currentUserId = get(req, "identity._id") as string;
    if (currentUserId.toString() !== existingRoom.userId.toString()) {
      return res.sendStatus(403);
    }

    existingRoom.title = title;
    existingRoom.description = description;
    existingRoom.status = status;
    existingRoom.price = price;
    existingRoom.currency = currency;
    existingRoom.availableDate = availableDate;
    existingRoom.address = address;
    existingRoom.notes = notes;

    await existingRoom.save();
    return res.status(200).json(existingRoom).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getRoom = async (req: express.Request, res: express.Response) => {
  try {
    const roomId = req.params.id;
    const room = await getRoomById(roomId);
    if (!room) {
      return res.sendStatus(400);
    }
    return res.status(200).json(room).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getAllRooms = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const rooms = await getRooms();
    return res.status(200).json(rooms);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteRoom = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const roomId = req.params.id;
    const room = await getRoomById(roomId);
    if (!room) {
      return res.sendStatus(400);
    }
    const currentUserId = get(req, "identity._id") as string;
    if (currentUserId.toString() !== room.userId.toString()) {
      return res.sendStatus(403);
    }
    await room.remove();
    return res.status(200).json(room).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
