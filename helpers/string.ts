export function truncateMultiLineString(
  inputStr: string,
  numLines: number,
  charsPerLine: number
): string {
  const maxStrLength = numLines * charsPerLine
  return inputStr.length > maxStrLength
    ? `${inputStr.substring(0, maxStrLength - 3)}...`
    : inputStr
}

export function arrayToString(
  arr: string[],
  separator: string = ', '
): string[] {
  const length = arr.length
  return arr.map((item, i) =>
    i !== length - 1 ? `${item}${separator}` : `${item}`
  )
}


