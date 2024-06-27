import { BodyMeasurementsUpdateManyWithoutUsersInput } from "./BodyMeasurementsUpdateManyWithoutUsersInput";
import { PhotoUploadUpdateManyWithoutUsersInput } from "./PhotoUploadUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bodyMeasurementsItems?: BodyMeasurementsUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  photoUploads?: PhotoUploadUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
