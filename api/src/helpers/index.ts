import crypto from "crypto";

const SECRET = "JOEY";

export const random = () => crypto.randomBytes(16).toString("base64");

export const authentication = (salt: string, password: string) =>
  crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
