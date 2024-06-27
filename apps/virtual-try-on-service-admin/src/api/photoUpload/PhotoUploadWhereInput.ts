import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoUploadWhereInput = {
  id?: StringFilter;
  imageUrl?: JsonFilter;
  user?: UserWhereUniqueInput;
};
