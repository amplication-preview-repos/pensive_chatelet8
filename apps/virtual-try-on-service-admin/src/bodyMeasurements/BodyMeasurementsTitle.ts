import { BodyMeasurements as TBodyMeasurements } from "../api/bodyMeasurements/BodyMeasurements";

export const BODYMEASUREMENTS_TITLE_FIELD = "id";

export const BodyMeasurementsTitle = (record: TBodyMeasurements): string => {
  return record.id?.toString() || String(record.id);
};
