import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    availableDate: { type: String, required: true },
    address: {
      "block-number": { type: String, required: true },
      "postal-code": { type: String, required: true },
      "unit-number": { type: String, required: true },
    },
    notes: { type: String },
  },
  { timestamps: true }
);

export const RoomModel = mongoose.model("Room", RoomSchema);

export const getRooms = () => RoomModel.find();

export const getRoomById = (id: string) => RoomModel.findById(id);

export const createRoom = (values: Record<string, any>) =>
  new RoomModel(values).save().then((room) => room.toObject());

export const deleteRoomById = (id: string) =>
  RoomModel.findByIdAndDelete({ _id: id });
