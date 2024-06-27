import { InputJsonValue } from "../../types";

export type ClothingItemCreateInput = {
  brand?: string | null;
  imageUrl?: InputJsonValue;
  name?: string | null;
  sizeInfo?: InputJsonValue;
};
