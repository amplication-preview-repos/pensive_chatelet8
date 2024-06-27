import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BodyMeasurementsServiceBase } from "./base/bodyMeasurements.service.base";

@Injectable()
export class BodyMeasurementsService extends BodyMeasurementsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
