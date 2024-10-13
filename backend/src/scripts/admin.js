import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const createAdminAccount = async () => {
  try {
    const existingAdmin = await User.findOne({ email: "admin@test.com" });
    if (!existingAdmin) {
      const newAdmin = new User({
        fname: "admin",
        email: "admin@test.com",
        role: "admin",
        password: await bcrypt.hash("admin", 10),
      })
      await newAdmin.save();
      console.log("Admin account created successfully");
      
    } else {
      console.log("Admin Account already exist");
    }
  } catch (error) {
    console.log("admin error :", error.message);
  }
};

export  {createAdminAccount};