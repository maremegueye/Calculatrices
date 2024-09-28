function clearDisplay() {
    document.getElementById("result").value = "";
}

function deleteChar() {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0, -1);
}

function appendToDisplay(char) {
    let result = document.getElementById("result").value;

    if (char === 'DEL') {
        deleteChar();
    } else {
        document.getElementById("result").value += char;
    }
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("result").value.replace(/,/g, ''));
        document.getElementById("result").value = result.toLocaleString('en');
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
