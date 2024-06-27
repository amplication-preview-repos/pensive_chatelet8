import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SizeRecommendationWhereInput = {
  clothingItem?: StringNullableFilter;
  id?: StringFilter;
  recommendedSize?: StringNullableFilter;
  user?: StringNullableFilter;
};
