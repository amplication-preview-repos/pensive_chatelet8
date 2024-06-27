import { BodyMeasurements } from "../bodyMeasurements/BodyMeasurements";
import { PhotoUpload } from "../photoUpload/PhotoUpload";
import { JsonValue } from "type-fest";

export type User = {
  bodyMeasurementsItems?: Array<BodyMeasurements>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  photoUploads?: Array<PhotoUpload>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
