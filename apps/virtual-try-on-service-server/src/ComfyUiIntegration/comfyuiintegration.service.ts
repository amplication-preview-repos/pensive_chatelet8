import { Injectable } from "@nestjs/common";

@Injectable()
export class ComfyUiIntegrationService {
  constructor() {}
  async AdjustFitWithComfyUi(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ApplyFitAdjustments(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ApplyFitAdjustmentsWithComfyUi(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
