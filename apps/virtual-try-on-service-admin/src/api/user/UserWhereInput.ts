import { BodyMeasurementsListRelationFilter } from "../bodyMeasurements/BodyMeasurementsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PhotoUploadListRelationFilter } from "../photoUpload/PhotoUploadListRelationFilter";

export type UserWhereInput = {
  bodyMeasurementsItems?: BodyMeasurementsListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  photoUploads?: PhotoUploadListRelationFilter;
  username?: StringFilter;
};
