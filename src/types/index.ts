export interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
}

export type SelectionType = "single" | "multiple";

export type ProductMode = "default" | "small" | "big";

export enum SelectionTypeEnum {
  multiple = "multiple",
  single = "single",
}
