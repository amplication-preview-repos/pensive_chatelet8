import { SizeRecommendation as TSizeRecommendation } from "../api/sizeRecommendation/SizeRecommendation";

export const SIZERECOMMENDATION_TITLE_FIELD = "clothingItem";

export const SizeRecommendationTitle = (
  record: TSizeRecommendation
): string => {
  return record.clothingItem?.toString() || String(record.id);
};
