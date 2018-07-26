export function isOctalString ( value: string ) {
  return !!value && value.length && value.indexOf('x') === 1;
}
