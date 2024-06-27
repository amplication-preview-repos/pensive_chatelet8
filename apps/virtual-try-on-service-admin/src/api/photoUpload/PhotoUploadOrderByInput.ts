import { SortOrder } from "../../util/SortOrder";

export type PhotoUploadOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
