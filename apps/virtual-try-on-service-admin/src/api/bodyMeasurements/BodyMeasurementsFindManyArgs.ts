import { BodyMeasurementsWhereInput } from "./BodyMeasurementsWhereInput";
import { BodyMeasurementsOrderByInput } from "./BodyMeasurementsOrderByInput";

export type BodyMeasurementsFindManyArgs = {
  where?: BodyMeasurementsWhereInput;
  orderBy?: Array<BodyMeasurementsOrderByInput>;
  skip?: number;
  take?: number;
};
