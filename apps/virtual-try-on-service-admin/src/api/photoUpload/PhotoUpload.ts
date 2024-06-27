import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type PhotoUpload = {
  createdAt: Date;
  id: string;
  imageUrl: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
