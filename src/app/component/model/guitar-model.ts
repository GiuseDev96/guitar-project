export type GuitarBrand =
  | 'FENDER'
  | 'GIBSON'
  | 'PRS'
  | 'IBANEZ'
  | 'EPIPHONE'
  | 'SQUIRE'
  | 'CHARVEL';

export interface Guitar {
  id: number;
  model: string;
  brand: GuitarBrand;
  createDate: Date;
  numberString: number;
}
