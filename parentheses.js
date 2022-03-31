let generateParenthesis = (input, open, close, s, array) => {

    if (open == input && close == input) {
        array.push(s);
        return;
    }

    if (open < input) {
        generateParenthesis(input, open + 1, close, s + '(', array);
    }

    if (close < open) {
        generateParenthesis(input, open, close + 1, s + ')', array);
    }

}

let n = 3;

let array = [];

generateParenthesis(n, 0, 0, '', array);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}