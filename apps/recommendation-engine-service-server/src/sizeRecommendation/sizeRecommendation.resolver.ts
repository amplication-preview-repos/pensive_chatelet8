import * as graphql from "@nestjs/graphql";
import { SizeRecommendationResolverBase } from "./base/sizeRecommendation.resolver.base";
import { SizeRecommendation } from "./base/SizeRecommendation";
import { SizeRecommendationService } from "./sizeRecommendation.service";

@graphql.Resolver(() => SizeRecommendation)
export class SizeRecommendationResolver extends SizeRecommendationResolverBase {
  constructor(protected readonly service: SizeRecommendationService) {
    super(service);
  }
}
