export function parseStringAsNumber(string) {
    const converted = parseInt(string, 10)
    return isNaN(converted) ? 0 : converted
}
