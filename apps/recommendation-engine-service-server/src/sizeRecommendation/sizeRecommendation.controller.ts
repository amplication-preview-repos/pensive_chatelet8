import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SizeRecommendationService } from "./sizeRecommendation.service";
import { SizeRecommendationControllerBase } from "./base/sizeRecommendation.controller.base";

@swagger.ApiTags("sizeRecommendations")
@common.Controller("sizeRecommendations")
export class SizeRecommendationController extends SizeRecommendationControllerBase {
  constructor(protected readonly service: SizeRecommendationService) {
    super(service);
  }
}
