import { BodyMeasurementsCreateNestedManyWithoutUsersInput } from "./BodyMeasurementsCreateNestedManyWithoutUsersInput";
import { PhotoUploadCreateNestedManyWithoutUsersInput } from "./PhotoUploadCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  bodyMeasurementsItems?: BodyMeasurementsCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  photoUploads?: PhotoUploadCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
