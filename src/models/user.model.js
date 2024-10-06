import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "Name required"],
    },
    email: {
      type: String,
      required: [true, "Name required"],
    },
    password: {
      type: String,
      required: [true, "Name required"],
    },
    role: {
      type: String,
      enum: ["admin", "customer"],
      default: "customer",
      required: [true, "Name required"],
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
