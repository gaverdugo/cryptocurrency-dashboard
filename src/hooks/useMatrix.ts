export function useMatrix (objectArray: Object[], cols: number, rows: number) {
    const head = objectArray.slice(0, rows).map(object => Object.values(object).slice(0, cols))
    const tailLength = rows - head.length

    if (tailLength > 0) {
        const tail = Array(tailLength).fill(Array(cols).fill(null))
        return [...head, ...tail]
    }

    return head
}