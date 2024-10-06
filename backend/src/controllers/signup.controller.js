import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const createUser = async (req, res) => {
  try {
    const { fname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      fname,
      email,
      password: hashedPassword,
      role: "customer",
    });
    const savedUser = await user.save();
    res
      .status(200)
      .json({ message: "User created successfully :", user: savedUser });
  } catch (error) {
    res.status(400).json({ message: "Error Creating User :", error });
  }
};

export default { createUser };
