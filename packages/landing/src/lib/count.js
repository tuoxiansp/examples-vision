function serialize(num, l) {
    return num.reduce((res, curr) => l[curr] + res, '')
}

export function create(l = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]) {
    const num = [ 0 ]

    return function count() {
        const max = l.length
        let cursor = 0

        while (cursor >= 0) {
            const next = (num[cursor] || 0) + 1
            if (next >= max) {
                num[cursor] = 0
                cursor++
            } else {
                num[cursor] = next

                return serialize(num, l)
            }
        }
    }
}

export default create()
