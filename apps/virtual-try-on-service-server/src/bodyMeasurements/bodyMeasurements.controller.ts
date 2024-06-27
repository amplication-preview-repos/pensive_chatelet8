import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BodyMeasurementsService } from "./bodyMeasurements.service";
import { BodyMeasurementsControllerBase } from "./base/bodyMeasurements.controller.base";

@swagger.ApiTags("bodyMeasurements")
@common.Controller("bodyMeasurements")
export class BodyMeasurementsController extends BodyMeasurementsControllerBase {
  constructor(protected readonly service: BodyMeasurementsService) {
    super(service);
  }
}
