
function tampilkanPesan() {
    document.getElementById("pesan").innerHTML =
        "Halo! Saya sedang belajar JavaScript.";
}

function hitungJumlah() {
    let angka1 = Number(document.getElementById("angka1").value);
    let angka2 = Number(document.getElementById("angka2").value);

    let hasil = angka1 + angka2;

    document.getElementById("hasil").innerHTML =
        "Hasil penjumlahan: " + hasil;
}

function cekBilangan() {
    let angka = Number(document.getElementById("bilangan").value);

    if (document.getElementById("bilangan").value === "") {
        document.getElementById("hasilBilangan").innerHTML =
            "Silakan masukkan bilangan.";
    } else if (angka % 2 == 0) {
        document.getElementById("hasilBilangan").innerHTML =
            angka + " adalah bilangan genap.";
    } else {
        document.getElementById("hasilBilangan").innerHTML =
            angka + " adalah bilangan ganjil.";
    }
}

function ubahWarna() {
    document.body.style.backgroundColor = "lightblue";
}

function tampilkanNama() {
    let nama = document.getElementById("nama").value;

    if (nama == "") {
        document.getElementById("hasilNama").innerHTML =
            "Silakan masukkan nama kamu.";
    } else {
        document.getElementById("hasilNama").innerHTML =
            "Halo, " + nama + "! Selamat belajar JavaScript.";
    }
}

function cekNilai() {
    let nilai = Number(document.getElementById("nilai").value);

    if (document.getElementById("nilai").value === "") {
        document.getElementById("hasilNilai").innerHTML =
            "Silakan masukkan nilai.";
    } else if (nilai < 0 || nilai > 100) {
        document.getElementById("hasilNilai").innerHTML =
            "Nilai harus antara 0 sampai 100.";
    } else if (nilai >= 75) {
        document.getElementById("hasilNilai").innerHTML =
            "Selamat, kamu dinyatakan lulus!";
    } else {
        document.getElementById("hasilNilai").innerHTML =
            "Kamu belum lulus. Tetap semangat belajar!";
    }
}
