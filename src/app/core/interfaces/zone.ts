import { Troncal } from "./troncal";

export interface Zone {
    id: number;
    name: string;
    path: string | string[];
    icon?: string;
    children?: Troncal[];
}
  