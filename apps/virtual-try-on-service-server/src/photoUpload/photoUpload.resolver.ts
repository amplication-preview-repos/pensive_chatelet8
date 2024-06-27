import * as graphql from "@nestjs/graphql";
import { PhotoUploadResolverBase } from "./base/photoUpload.resolver.base";
import { PhotoUpload } from "./base/PhotoUpload";
import { PhotoUploadService } from "./photoUpload.service";

@graphql.Resolver(() => PhotoUpload)
export class PhotoUploadResolver extends PhotoUploadResolverBase {
  constructor(protected readonly service: PhotoUploadService) {
    super(service);
  }
}
