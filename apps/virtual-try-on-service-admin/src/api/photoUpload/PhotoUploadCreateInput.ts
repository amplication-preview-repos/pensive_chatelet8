import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoUploadCreateInput = {
  imageUrl?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
