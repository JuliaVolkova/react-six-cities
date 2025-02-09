import { SortingOptions } from '../const';

type ValueOf<T> = T[keyof T];
export type SortOptions = ValueOf<typeof SortingOptions>;
