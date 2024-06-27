import { PhotoUpload as TPhotoUpload } from "../api/photoUpload/PhotoUpload";

export const PHOTOUPLOAD_TITLE_FIELD = "id";

export const PhotoUploadTitle = (record: TPhotoUpload): string => {
  return record.id?.toString() || String(record.id);
};
