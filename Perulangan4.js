const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Masukkan kalimat: ", function(kalimat) {

    let hasil = kalimat.replaceAll(" ", "");

    console.log("Hasil tanpa spasi: " + hasil);

    input.close();
});