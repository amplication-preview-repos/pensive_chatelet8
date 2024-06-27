import { Module } from "@nestjs/common";
import { BodyMeasurementsModuleBase } from "./base/bodyMeasurements.module.base";
import { BodyMeasurementsService } from "./bodyMeasurements.service";
import { BodyMeasurementsController } from "./bodyMeasurements.controller";
import { BodyMeasurementsResolver } from "./bodyMeasurements.resolver";

@Module({
  imports: [BodyMeasurementsModuleBase],
  controllers: [BodyMeasurementsController],
  providers: [BodyMeasurementsService, BodyMeasurementsResolver],
  exports: [BodyMeasurementsService],
})
export class BodyMeasurementsModule {}
