import { SortingOptions } from '../const';

type ValueOf<T> = T[keyof T];
export type TSortOptions = ValueOf<typeof SortingOptions>;
