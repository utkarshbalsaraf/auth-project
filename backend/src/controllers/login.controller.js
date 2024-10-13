import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwtUtils.js";

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new error("User Not Found");
    }
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      throw new error("Incorrect Password");
    }
    const token = generateToken(existingUser);
    res.status(200).json({message:"Login Successful",token:token,user:existingUser});
  } catch (error) {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

export default {userLogin};
