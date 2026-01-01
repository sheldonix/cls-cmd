export interface ClsOptions {
  stream?: NodeJS.WriteStream;
  clearBuffer?: boolean;
}

declare function cls(options?: ClsOptions): boolean;

export const CLEAR_SEQUENCE: string;
export const CLEAR_SCREEN_SEQUENCE: string;

export { cls };
export default cls;
