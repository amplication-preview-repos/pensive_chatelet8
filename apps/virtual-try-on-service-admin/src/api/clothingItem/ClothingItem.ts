import { JsonValue } from "type-fest";

export type ClothingItem = {
  brand: string | null;
  createdAt: Date;
  id: string;
  imageUrl: JsonValue;
  name: string | null;
  sizeInfo: JsonValue;
  updatedAt: Date;
};
