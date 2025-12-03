export function parseStringAsNumber(string: string): number {
  const converted = parseInt(string, 10)
  return isNaN(converted) ? 0 : converted
}


