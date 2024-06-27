import * as graphql from "@nestjs/graphql";
import { BodyMeasurementsResolverBase } from "./base/bodyMeasurements.resolver.base";
import { BodyMeasurements } from "./base/BodyMeasurements";
import { BodyMeasurementsService } from "./bodyMeasurements.service";

@graphql.Resolver(() => BodyMeasurements)
export class BodyMeasurementsResolver extends BodyMeasurementsResolverBase {
  constructor(protected readonly service: BodyMeasurementsService) {
    super(service);
  }
}
