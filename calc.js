function tombol(angka){
    var tampil = document.querySelector("#layar").value;
    if (tampil == "0") {
        tampil = angka;
    } else {
        tampil += angka;
    }
    document.querySelector("#layar").value = tampil;
}