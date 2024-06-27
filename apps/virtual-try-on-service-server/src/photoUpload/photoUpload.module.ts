import { Module } from "@nestjs/common";
import { PhotoUploadModuleBase } from "./base/photoUpload.module.base";
import { PhotoUploadService } from "./photoUpload.service";
import { PhotoUploadController } from "./photoUpload.controller";
import { PhotoUploadResolver } from "./photoUpload.resolver";

@Module({
  imports: [PhotoUploadModuleBase],
  controllers: [PhotoUploadController],
  providers: [PhotoUploadService, PhotoUploadResolver],
  exports: [PhotoUploadService],
})
export class PhotoUploadModule {}
