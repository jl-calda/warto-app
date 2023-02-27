import express from "express";
import { getUserByEmail, createUser } from "../db/users";
import { random, authentication } from "../helpers";

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;
    //Check email and password is present
    if (!email || !password) {
      return res.sendStatus(400);
    }
    //Get user from database if email is present
    const user = await getUserByEmail(email).select(
      `+authentication.password +authentication.salt`
    );
    //Check is user is present
    if (!user) {
      return res.sendStatus(400);
    }
    //Check if password is correct
    const expectedHash = authentication(user.authentication.salt, password);

    if (user.authentication.password !== expectedHash) {
      return res.sendStatus(400);
    }
    //Create session token
    const salt = random();
    //Save session token to database
    user.authentication.sessionToken = authentication(
      salt,
      user._id.toString()
    );

    await user.save();
    //Send session token to client
    res.cookie("WARTO-AUTH", user.authentication.sessionToken, {
      domain: "localhost",
      path: "/",
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username, avatar } = req.body;
    //Check if email, password and username is present
    if (!email || !password || !username) {
      return res.sendStatus(400);
    }
    //Check if user already exists
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.sendStatus(400);
    }
    //Create user
    const salt = random();
    const user = await createUser({
      avatar,
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

// export const logout = async (req: express.Request, res: express.Response) => {
//   try {
// const { user } = req;

// if (!user) {
//   return res.sendStatus(400);
// }

// user.authentication.sessionToken = null;
// await user.save();

// res.clearCookie("WARTO-AUTH", {
//   domain: "localhost",
//   path: "/",
// });

//     return res.sendStatus(200);
//   } catch (error) {
//     console.log(error);
//     return res.sendStatus(400);
//   }
// };
