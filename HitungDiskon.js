const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalBelanja = 0;

function menu() {
    console.log("\n=== DAFTAR BARANG ===");
    console.log("1. Suncreen        Rp50.000");
    console.log("2. Facial Wash     Rp35.000");
    console.log("3. Liptint         Rp45.000");
    console.log("4. Moisturizer     Rp75.000");
    console.log("5. Serum           Rp55.000");
    console.log("0. Selesai");

    input.question("Pilih barang: ", function(pilihan) {

        if (pilihan == "0") {
            hitung();
            return;
        }

        let harga;

        switch (pilihan) {
            case "1":
                harga = 50000;
                break;
            case "2":
                harga = 35000;
                break;
            case "3":
                harga = 45000;
                break;
            case "4":
                harga = 75000;
                break;
            case "5":
                harga = 55000;
                break;
            default:
                console.log("Pilihan tidak tersedia!");
                menu();
                return;
        }

        input.question("Masukkan jumlah: ", function(jumlah) {

            let subtotal = harga * Number(jumlah);

            totalBelanja += subtotal;

            console.log("Subtotal: Rp" + subtotal);

            menu();
        });
    });
}

function hitung() {

    let diskon;

    if (totalBelanja >= 300000) {
        diskon = 10;
    } else if (totalBelanja >= 100000) {
        diskon = 5;
    } else if (totalBelanja >= 50000) {
        diskon = 3;
    } else {
        diskon = 0;
    }

    let potongan = totalBelanja * diskon / 100;
    let totalBayar = totalBelanja - potongan;

    console.log("\n=== STRUK PEMBELIAN ===");
    console.log("Total Belanja : Rp" + totalBelanja);

    if (diskon == 0) {
        console.log("Anda tidak mendapatkan diskon karena tidak mencapai minimum belanja");
    } else {
        console.log("Diskon        : " + diskon + "%");
        console.log("Potongan      : Rp" + potongan);
    }

    console.log("Total Bayar   : Rp" + totalBayar);

    input.close();
}

menu();