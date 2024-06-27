import { InputJsonValue } from "../../types";

export type ClothingItemUpdateInput = {
  brand?: string | null;
  imageUrl?: InputJsonValue;
  name?: string | null;
  sizeInfo?: InputJsonValue;
};
