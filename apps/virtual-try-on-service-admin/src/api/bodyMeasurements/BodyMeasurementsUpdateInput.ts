import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BodyMeasurementsUpdateInput = {
  chest?: number | null;
  height?: number | null;
  hips?: number | null;
  user?: UserWhereUniqueInput | null;
  waist?: number | null;
};
