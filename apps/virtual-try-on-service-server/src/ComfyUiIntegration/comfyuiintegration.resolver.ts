import * as graphql from "@nestjs/graphql";
import { ComfyUiIntegrationService } from "./comfyuiintegration.service";

export class ComfyUiIntegrationResolver {
  constructor(protected readonly service: ComfyUiIntegrationService) {}

  @graphql.Mutation(() => String)
  async AdjustFitWithComfyUi(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AdjustFitWithComfyUi(args);
  }

  @graphql.Query(() => String)
  async ApplyFitAdjustments(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ApplyFitAdjustments(args);
  }

  @graphql.Query(() => String)
  async ApplyFitAdjustmentsWithComfyUi(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ApplyFitAdjustmentsWithComfyUi(args);
  }
}
