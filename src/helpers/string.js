export function truncateMultiLineString(inputStr, numLines, charsPerLine) {
    const maxStrLength = numLines * charsPerLine
    return inputStr.length > maxStrLength
        ? `${inputStr.substring(0, maxStrLength - 3)}...`
        : inputStr
}

export function arrayToString(arr, separator = ', ') {
    const length = arr.length
    return arr.map((item, i) =>
        i !== length ? `${item}${separator}` : `${item}`
    )
}
