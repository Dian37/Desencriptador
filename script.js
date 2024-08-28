function encriptar() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        charCode += 3; // Desplazamiento de 3
        encryptedText += String.fromCharCode(charCode);
    }

    outputText.value = encryptedText;
}

function desencriptar() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    let decryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        charCode -= 3; // Revertir el desplazamiento de 3
        decryptedText += String.fromCharCode(charCode);
    }

    outputText.value = decryptedText;
}
