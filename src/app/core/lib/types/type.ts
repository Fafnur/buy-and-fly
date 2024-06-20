/*  eslint-disable @typescript-eslint/no-explicit-any */
export type ChangeFn = (value: any) => void;

export type TouchedFn = () => void;

export type DisplayFn = (value: any, index?: number) => string;

export type MaskFn = (value: any) => string;

export type StyleFn = (value?: any) => string | string[];

export type CoerceBoolean = boolean | string | undefined | null;
