import { SortOrder } from "../../util/SortOrder";

export type ClothingItemOrderByInput = {
  brand?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  name?: SortOrder;
  sizeInfo?: SortOrder;
  updatedAt?: SortOrder;
};
