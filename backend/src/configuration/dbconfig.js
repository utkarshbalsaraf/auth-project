import mongoose from "mongoose";

const dbConnect = () => {
  const uri =
    "mongodb+srv://ubalsaraf2:utkarsh%401@cluster0.mdrpc.mongodb.net/testingdb?retryWrites=true&w=majority&appName=Cluster0";
  mongoose
    .connect(uri)
    .then(console.log("db connected successfully"))
    .catch((error) =>
      console.log("Error Occured during connecting to mongdb ", error)
    );
};
export default dbConnect;