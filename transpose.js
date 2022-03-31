const transpose = array => array.reduce((r, a) => a.map((v, i) => [...(r[i] || []), v]), []),
    matrix = [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3]
    ];

console.log(transpose(matrix));