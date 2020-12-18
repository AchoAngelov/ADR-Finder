import { IBase } from './base';
import { ICategory } from './category';

export interface IAdr extends IBase {
  name: string;
  oCode: string;
  hCode: string;
  description: string;
  category_id: ICategory;
}
