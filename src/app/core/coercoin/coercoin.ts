/**
 * @see https://github.com/angular/components/blob/main/src/cdk/coercion/boolean-property.ts
 */
export function coerceBooleanProperty(value: unknown): boolean {
  return value != null && `${value}` !== 'false';
}
