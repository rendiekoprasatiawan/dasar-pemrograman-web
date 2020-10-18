var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    // Jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluar dari function
        return penumpang;
    } else {
        /* else */
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array dan keluar dari function
                return penumpang;
            } else if (penumpang[i] == namaPenumpang) {
                // jika sudah ada nama yang sama
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' sudah ada di dalam angkot.');
                // kembalikan isi array dan keluar dari function
                return penumpang;
            } else if (i == penumpang.length - 1) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array dan keluar dari function
                return penumpang;

            }
        }

    }
}

// ini hapus penumpang
var hapusPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tampilkan pesan bahwa angkot kosong, dan
        console.log('Angkot masih kosong.');
        // tidak mungkin ada penumpang turun
        // kembalikan isi array dan keluar dari function
        return penumpang;
    } else {
        // else
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika nama penumpang sesuai 
            if (penumpang[i] == namaPenumpang) {
                // hapus penumpang dengan mengubah namanya,
                // menjadi undefined
                penumpang[i] = undefined;
                // kembalikan isi array dan keluar dari function
                return penumpang;
            } else if (i == penumpang.length - 1) {
                // jika tidak ada nama yang sesuai
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + 'tidak ada di dalam Angkot.')
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }
    }
}