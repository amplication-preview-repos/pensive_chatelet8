import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ClothingItemWhereInput = {
  brand?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: JsonFilter;
  name?: StringNullableFilter;
  sizeInfo?: JsonFilter;
};
