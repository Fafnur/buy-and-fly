// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ChangeFn = (value: any) => void;
export type TouchedFn = () => void;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DisplayFn = (value: any, index?: number) => string;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MaskFn = (value: any) => string;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StyleFn = (value?: any) => string | string[];

export type CoerceBoolean = boolean | string | undefined | null;
