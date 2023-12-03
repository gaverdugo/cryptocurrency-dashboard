export default function useMatrix (objectArray: Array<Object>, cols: number, rows: number) {
    const head = objectArray.slice(rows).map(object => Object.values(object).slice(cols))
    const tailLength = rows - head.length

    if (tailLength > 0) {
        const tail = Array(tailLength).map( _ => Array(cols))
        return [...head, ...tail]
    }

    return head
}