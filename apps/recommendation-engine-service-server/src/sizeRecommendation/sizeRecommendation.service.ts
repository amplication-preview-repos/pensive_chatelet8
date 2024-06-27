import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SizeRecommendationServiceBase } from "./base/sizeRecommendation.service.base";

@Injectable()
export class SizeRecommendationService extends SizeRecommendationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
