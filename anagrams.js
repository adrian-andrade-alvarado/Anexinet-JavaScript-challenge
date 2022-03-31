let checkAnagrams = (a, b) => {
    var c = a.replace(/\W+/g, '').toLowerCase().split("").sort().join("");
    var d = b.replace(/\W+/g, '').toLowerCase().split("").sort().join("");
    return (c === d) ? "Anagram" : "Not anagram";
}

// source list https://examples.yourdictionary.com/anagram-examples.html
let result = checkAnagrams('elbow  ', 'below');
console.log(result);