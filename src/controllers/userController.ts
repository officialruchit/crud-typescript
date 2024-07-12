import { Request, Response } from "express";
import { User, Iuser } from "../models/user";

export const createuser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).send({ error: "Name, email, and password are required" });
      return;
    }
    const user: Iuser = new User({ name, email, password });
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(500).json({err})
  }
};

export const getusers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const updateuser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send(user);
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

export const deleteuser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send("User deleted");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
