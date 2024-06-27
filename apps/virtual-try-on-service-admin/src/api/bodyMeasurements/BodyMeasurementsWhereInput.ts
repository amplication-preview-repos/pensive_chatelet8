import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BodyMeasurementsWhereInput = {
  chest?: FloatNullableFilter;
  height?: FloatNullableFilter;
  hips?: FloatNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  waist?: FloatNullableFilter;
};
