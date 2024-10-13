import mongoose from "mongoose";

const dbConnect = () => {
  const uri =
    "mongodb://localhost:27017/auth_login";
  mongoose
    .connect(uri)
    .then(console.log("db connected successfully"))
    .catch((error) =>
      console.log("Error Occured during connecting to mongdb ", error)
    );
};
export default dbConnect;