import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoUploadUpdateInput = {
  imageUrl?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
