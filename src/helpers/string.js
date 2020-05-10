export function truncateMultiLineString(inputStr, numLines, charsPerLine) {
    const maxStrLength = numLines * charsPerLine
    return inputStr.length > maxStrLength
        ? `${inputStr.substring(0, maxStrLength - 3)}...`
        : inputStr
}
