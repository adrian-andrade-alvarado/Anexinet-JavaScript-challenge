let checkAnagrams = (a, b) => {
    [a, b] = [b, a];

    console.log(`a new value: ${a}`);
    console.log(`b new value: ${b}`);
}

let result = checkAnagrams(4, 10);