import { Module } from "@nestjs/common";
import { ComfyUiIntegrationService } from "./comfyuiintegration.service";
import { ComfyUiIntegrationController } from "./comfyuiintegration.controller";
import { ComfyUiIntegrationResolver } from "./comfyuiintegration.resolver";

@Module({
  controllers: [ComfyUiIntegrationController],
  providers: [ComfyUiIntegrationService, ComfyUiIntegrationResolver],
  exports: [ComfyUiIntegrationService],
})
export class ComfyUiIntegrationModule {}
