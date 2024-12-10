const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Pilih Operasi:");
console.log("1. Penjumlahan (+)");
console.log("2. Pengurangan (-)");

rl.question("Masukkan pilihan (1/2): ", (operasi) => {
    if (operasi === "1" || operasi === "2") {
        rl.question("Masukkan angka pertama: ", (input1) => {
            rl.question("Masukkan angka kedua: ", (input2) => {
                const angka1 = parseFloat(input1);
                const angka2 = parseFloat(input2);
                
                if (operasi === "1") {
                    console.log(`Hasil dari ${angka1} + ${angka2} = ${angka1 + angka2}`);
                } else if (operasi === "2") {
                    console.log(`Hasil dari ${angka1} - ${angka2} = ${angka1 - angka2}`);
                }
                rl.close();
            });
        });
    } else {
        console.log("Pilihan tidak valid.");
        rl.close();
    }
});
