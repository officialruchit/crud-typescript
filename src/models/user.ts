import { Schema, model, Document } from "mongoose";
interface Iuser extends Document {
  name: string;
  email: string;
  password: string;
}
const user = new Schema<Iuser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = model<Iuser>("user", user, "user");
export { User, Iuser };
