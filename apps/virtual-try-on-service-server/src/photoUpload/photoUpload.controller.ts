import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PhotoUploadService } from "./photoUpload.service";
import { PhotoUploadControllerBase } from "./base/photoUpload.controller.base";

@swagger.ApiTags("photoUploads")
@common.Controller("photoUploads")
export class PhotoUploadController extends PhotoUploadControllerBase {
  constructor(protected readonly service: PhotoUploadService) {
    super(service);
  }
}
