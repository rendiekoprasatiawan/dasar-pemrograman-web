// perilaku javascript
// meskipun yg dimasukkan bilangan bulat tpi yang diproses adalah bilangan pecahan

// koma (,) di javascript digantikan dengan titik (.)

// maksimal kita bisa menyimpan 17 digit dibelakang koma

// hati-hati menyimpan bilangan pecahan karena tidak terlalu akurat

// kita bisa saja menyimpan angka :
// 1. angka tanpa desimal
// 2. angka dengan desimal (be careffull)
// 3. eksponen
// 4. bilangan negatif

// urutan bit penggunaan (64 bit)
// 1 bit untuk penanda jika bilangannya negatif
// 11 bit digunakaan untuk eksponen
// 52 bit baru digunakan untuk angka sebenarnya

// jangan pernah mengawali angka dengan 0 karena terkadang ini gak sesuai dengan apa yang menjadi harapan kita
// kalau misalkan kita memasukkan angkka 022 di console javascript maka hasilnya 18, kenapa?
// karena dengan kita menuliskan angka 0 diawal angka kita maka akan dianggap bilangan oktal
// bilangan oktal diawali dengan 0 - 7

// sama jika kita mengawalli angka dengan 0 dan 0x mka itu akan dianggap sbagai bialagn hexadesimal
// contoh : 00xff maka akan mengembalikan nilai 255

// angka spesial :
// Infinity
// -Infinity
// NaN

// contoh infinity
// jika 2/0 maka hasilnya Infinity

// contoh -Infinity
// jika -2/0 maka hasilnya -Infinity

// contoh NaN
// 0/0 maka hasilnya NaN (Not a Number)
// 100/"apel" maka hasilnyya juga NaN

// hati hati juga kalau membagi bilangan dengan string tp dlm string trdpat angka maka hasilnya sama seperti pembagian semestinya