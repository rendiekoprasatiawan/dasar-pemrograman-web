// percobaan pertama
let s = "";
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 5; j++) {
    s += `#`;
    s += ` `
  }
  s += "\n";
  for (let k = 0; k < 5; k++) {
    s += ` `
    s += `#`;
  }
  s += "\n";
}
console.log(s);

// percobaan kedua
/* var s = "";
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s); */

// percobaan ketiga
/* var s = "";
for (var i = 10; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s); */

// percobaan keempat
/* var s = "";
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < i; j++) {
        s += "*";
    }
    s += "\n";
}
for (var i = 10; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s += "*";
    }
    s += "\n";
}
console.log(s); */

// percobaan kelima
/* var s = '';
for (var i = 0; i < 10; i++) {
    for (var j = 0; j <= i; j++) {
        s += " ";
    }
    for (var j = 10; j > i; j--) {
        s += "*";
    }
    s += "\n";
}
console.log(s);
 */

// percobaan keenam
/* var s = '';
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < i; j++) {
        s += "+";
    }
    for (var j = 10; j > i; j--) {
        s += "*";
    }
    s += "\n";
}
for (var i = 10; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s += "+";
    }
    for (var j = 10; j > i; j--) {
        s += "*";
    }
    s += "\n";
}
console.log(s); */

// percobaan ketujuh
/* var s = '';
for (var i = 10; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s += "+";
    }
    for (var j = 10; j > i; j--) {
        s += "*";
    }
    s += "\n";
}
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < i; j++) {
        s += "+";
    }
    for (var j = 10; j > i; j--) {
        s += "*";
    }
    s += "\n";
}
console.log(s); */

//percobaan kedelapan
/* var s = "";
for (var i = 10; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    s += " ";
  }
  for (var j = 10; j > i; j--) {
    s += "*";
  }
  for (var j = 10; j >= i; j--) {
    s += "*";
  }
  s += "\n";
}
console.log(s); */

// percobaan kesembilan
/* var s = "";
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < i; j++) {
    s += "+";
  }
  for (var j = 10; j > i; j--) {
    s += "*";
  }
  for (var j = 10; j > i; j--) {
    s += "*";
  }
  s += "\n";
}
console.log(s); */

// percobaan kesepuluh
/* var s = "";
for (var i = 10; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    s += " ";
  }
  for (var j = 10; j > i; j--) {
    s += "*";
  }
  for (var j = 10; j >= i; j--) {
    s += "*";
  }
  s += "\n";
}
for (var i = 0; i < 10; i++) {
  for (var j = 0; j <= i; j++) {
    s += " ";
  }
  for (var j = 10; j > i; j--) {
    s += "*";
  }
  for (var j = 10; j > i; j--) {
    s += "*";
  }
  s += "\n";
}
console.log(s); */

/* --------------------------------------------------- */

/* let faceBintang = `*`;
let bintang = 1;
let jmlBintang = 5;
let stringKosong = ``;
let stringSpasi = ` `
let newline = `\n`;
 */
// ini bintang berurutan dari yang kecil ke besar
/* for (bintang; bintang <= jmlBintang; bintang++) {
  for (let bintangBaru = 1; bintangBaru <= bintang; bintangBaru++) {
    stringKosong += faceBintang;
  }
  stringKosong += newline;
}
console.log(stringKosong); */

// ini mirror bintang berurutan dari yang lebih besar ke yang lebih kecil
/* for (bintang; bintang <= jmlBintang; bintang++) {
  for (let bintangBaru = 5; bintangBaru >= bintang; bintangBaru--) {
    stringKosong += faceBintang;
  }
  stringKosong += newline;
}
console.log(stringKosong); */

// ini menggabungkan kedua urutan diatas..
/* for (bintang; bintang <= jmlBintang; bintang++) {
  for (let bintangBaru = 1; bintangBaru <= bintang; bintangBaru++) {
    stringKosong += faceBintang;
  }
  stringKosong += newline;
}
for (bintang + 4; bintang > jmlBintang - 4; bintang--) {
  for (let bintangBaru = 1; bintangBaru < bintang; bintangBaru++) {
    stringKosong += faceBintang;
  }
  stringKosong += newline;
}
console.log(stringKosong); */

// ini menggabungkan mirroring ke-kanan dari yang besar ke yang kecil
/* for (bintang; bintang <= jmlBintang; bintang++) {
  for (let bintangBaru1 = 1; bintangBaru1 <= bintang; bintangBaru1++) {
    stringKosong += stringSpasi;
  }

  for (let bintangBaru = 5; bintangBaru >= bintang; bintangBaru--) {
    stringKosong += faceBintang;
  }
  stringKosong += newline;
}
console.log(stringKosong); */

// ini mengabungkan mirroring ke-kanan dari yang kecil ke yang besar
/* for (bintang; bintang <= jmlBintang; bintang++) {
  for (let bintangBaru = 5; bintangBaru >= bintang; bintangBaru--) {
    stringKosong += stringSpasi;
  }
  for (let bintangBaru1 = 1; bintangBaru1 <= bintang; bintangBaru1++) {
    stringKosong += faceBintang;;
  }
  stringKosong += newline;
}
console.log(stringKosong); */

// ini gabungan darri mirror kompleks diatas
/* for (bintang; bintang <= jmlBintang; bintang++) {
  for (let bintangBaru = 5; bintangBaru >= bintang; bintangBaru--) {
    stringKosong += stringSpasi;
  }
  for (let bintangBaru1 = 1; bintangBaru1 <= bintang; bintangBaru1++) {
    stringKosong += faceBintang;;
  }
  stringKosong += newline;
}
for (bintang + 4; bintang >= jmlBintang - 4; bintang--) {
  for (let bintangBaru1 = 5; bintangBaru1 >= bintang; bintangBaru1--) {
    stringKosong += stringSpasi;
  }
  for (let bintangBaru = 1; bintangBaru <= bintang; bintangBaru++) {
    stringKosong += faceBintang;
  }
  stringKosong += newline;
}
console.log(stringKosong); */

// ini gabungin segitiga
/* for (bintang; bintang <= jmlBintang; bintang++) {
  for (let bintangBaru = 5; bintangBaru >= bintang; bintangBaru--) {
    stringKosong += stringSpasi;
  }
  for (let bintangBaru1 = 1; bintangBaru1 <= bintang; bintangBaru1++) {
    stringKosong += faceBintang;
  }
  for (let bintangbaru2 = 1; bintangbaru2 < bintang; bintangbaru2++) {
    stringKosong += faceBintang;
  }
  stringKosong += newline;
}
for (bintang + 4; bintang >= jmlBintang - 4; bintang--) {
  for (let bintangBaru = 5; bintangBaru >= bintang; bintangBaru--) {
    stringKosong += stringSpasi;
  }
  for (let bintangbaru1 = 1; bintangbaru1 <= bintang; bintangbaru1++) {
    stringKosong += faceBintang;
  }
  for (let bintangbaru2 = 1; bintangbaru2 < bintang; bintangbaru2++) {
    stringKosong += faceBintang;
  }
  stringKosong += newline
}
console.log(stringKosong); */

let sKosong = '';
let facebintang = '*';
let jmlBintang = 5;
/* for (let bintang = 1; bintang <= jmlBintang; bintang++) {
  for (let bintangBaru = 1; bintangBaru <= jmlBintang; bintangBaru++) {
    sKosong += facebintang;
  }
  sKosong += '\n';
}
console.log(sKosong); */

for (let bintang = 0; bintang < jmlBintang; bintang++) {
  for (let bintangBaru = 5; bintangBaru > bintang; bintangBaru--) {
    sKosong += facebintang;
  }
  sKosong += '\n';
}
console.log(sKosong);

for (let bintang = 0; bintang < jmlBintang; bintang++) {
  for (let bintangBaru = 0; bintangBaru <= bintang; bintangBaru++) {
    sKosong += facebintang;
  }
  sKosong += '\n';
}
console.log(sKosong);