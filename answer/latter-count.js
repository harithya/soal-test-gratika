const sortText = (str) => {
    const text = str.replace(/\s/g, '')
        .split('')
        .sort((a, b) => {
            if (a.toLowerCase() < b.toLowerCase()) return -1;
            if (a.toLowerCase() > b.toLowerCase()) return 1;
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    return text
}

const latterCount = (str) => {
    let res = {}
    const text = sortText(str)

    text.map((val) => {
        if (res[val]) {
            res[val] += 1
        } else {
            res[val] = 1
        }
    })

    return res
}

export {
    latterCount,
    sortText
}