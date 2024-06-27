import { User } from "../user/User";

export type BodyMeasurements = {
  chest: number | null;
  createdAt: Date;
  height: number | null;
  hips: number | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
  waist: number | null;
};
