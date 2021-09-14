import mongoose from "mongoose";

const Group = new mongoose.Schema(
  {
    name: { type: String, required: true },
    course: { type: Number, required: true },
    amountOfStudents: { type: Number, required: false },
  },
  { collection: "groups" }
);

export default mongoose.model("Group", Group);
