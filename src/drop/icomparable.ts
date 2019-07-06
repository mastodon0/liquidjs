import { isFunction } from '../util/underscore'

export interface IComparable {
  equals: (rhs: any) => boolean;
  gt: (rhs: any) => boolean;
  geq: (rhs: any) => boolean;
  lt: (rhs: any) => boolean;
  leq: (rhs: any) => boolean;
}

export function isComparable (arg: any): arg is IComparable {
  return arg && isFunction(arg.equals)
}
