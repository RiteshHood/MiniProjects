let analyze = document.getElementById("analyze");
function analyzeWord() {
    //accessing the input value
    let input = document.getElementById("word").value;

    //validating the input
    if (input.trim() === "") {
        document.getElementById("result").textContent = "Please enter valid text!";
        return;
    }

    //converting the input into an array
    let wordArr = input.trim().replace(/\s+/g, " ").split(" ");

    //calculating the total letters
    let totalletters = wordArr.join("").length;

    //calculating the total words
    let totalWords = wordArr.length;

    //longest word in text
    let longestWord = wordArr.reduce((a, b) => {
        return a.length > b.length ? a : b;
    }, "")

    //capital letters
    let capitalLetterCount = input.split("").filter((letter) => letter > 'A' && letter < 'Z').length;
    let capitalLetters = input.split("").filter((letter) => {
        if (letter > 'A' && letter < 'Z') {
            return letter.join(", ");
        }
    });

    //shortest word in text
    let shortestWord = wordArr.reduce((a, b) => {
        return a.length < b.length ? a : b;
    }, wordArr[0]) || ""

    // let count= wordArr.includes("a");
    let count = 0;
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i].includes("a")) {
            count++;
        }

    }

    // if there is no 'a' in the text show a message
    let countOfAmsg = count > 0 ? `Count of 'a': ${count}` : "No 'a' found in the text.";

    // if there is no capital letter in the text show a message
    let capitalLetterMsg = capitalLetterCount > 0 ? `Capital letters: ${capitalLetterCount}` : "No capital letters found in the text.";

    //displaying the result
    document.getElementById("result").textContent = `Total Letters: ${totalletters}, Total Words: ${totalWords}, ${countOfAmsg}, ` +
        `Shortest Word: ${shortestWord}, Longest Word: ${longestWord}, ${capitalLetterMsg}`;

}

analyze.addEventListener("click", analyzeWord);