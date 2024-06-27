import { PhotoUploadWhereInput } from "./PhotoUploadWhereInput";
import { PhotoUploadOrderByInput } from "./PhotoUploadOrderByInput";

export type PhotoUploadFindManyArgs = {
  where?: PhotoUploadWhereInput;
  orderBy?: Array<PhotoUploadOrderByInput>;
  skip?: number;
  take?: number;
};
