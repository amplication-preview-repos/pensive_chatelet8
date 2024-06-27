import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ComfyUiIntegrationService } from "./comfyuiintegration.service";

@swagger.ApiTags("comfyUiIntegrations")
@common.Controller("comfyUiIntegrations")
export class ComfyUiIntegrationController {
  constructor(protected readonly service: ComfyUiIntegrationService) {}

  @common.Post("/adjust-fit")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AdjustFitWithComfyUi(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AdjustFitWithComfyUi(body);
      }

  @common.Get("/:id/apply-fit-adjustments")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ApplyFitAdjustments(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ApplyFitAdjustments(body);
      }

  @common.Get("/:id/apply-fit-adjustments-with-comfy-ui")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ApplyFitAdjustmentsWithComfyUi(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ApplyFitAdjustmentsWithComfyUi(body);
      }
}
