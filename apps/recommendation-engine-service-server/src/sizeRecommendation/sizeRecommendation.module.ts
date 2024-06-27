import { Module } from "@nestjs/common";
import { SizeRecommendationModuleBase } from "./base/sizeRecommendation.module.base";
import { SizeRecommendationService } from "./sizeRecommendation.service";
import { SizeRecommendationController } from "./sizeRecommendation.controller";
import { SizeRecommendationResolver } from "./sizeRecommendation.resolver";

@Module({
  imports: [SizeRecommendationModuleBase],
  controllers: [SizeRecommendationController],
  providers: [SizeRecommendationService, SizeRecommendationResolver],
  exports: [SizeRecommendationService],
})
export class SizeRecommendationModule {}
