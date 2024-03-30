function showWord() {
    let word = document.getElementById("palabra").value;
    if (word !== "") {
        let newOrderWord = revertedWord(word);
        alert("Tu palabra es " + word + " y si se invierte el orden es: " + newOrderWord);
    } else {
        alert("Porfavor ingresa una palabra correcta");
    }
}

function revertedWord(word) {
    return word.split("").reverse().join("");
}

let button = document.getElementById("button");
button.addEventListener("click", showWord);