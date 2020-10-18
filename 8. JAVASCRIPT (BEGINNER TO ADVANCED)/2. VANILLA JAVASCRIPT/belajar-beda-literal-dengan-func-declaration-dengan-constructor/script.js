// this
// this adalah sebuah keyword special yang secara otomatis didefinisikan disetiap function

// nih contohnya this ada didalam defaultnya : object global
console.log(this); // sama kan?
console.log(window); // sama kan?
console.log(window === this); //true kan?

/* _______________________________________________________
 */

/* membuat object */


// cara 1
// object dengan function declaration
function halo() {
    console.log(this);
    console.log('halo');
}

// cara manggil function declaration
this.halo();
// this pada function declaration konteksnya mengembalikan object global

/* 
_______________________________________________________
*/


// cara 2
// object dengan literal
var obj = {
    a: 20,
    nama: 'rendi'
};
obj.halo = function () {
    console.log(this);
    console.log('halo');
}

// cara manggil literal
obj.halo();
// nah yang dikembalikan obj beserta semua isinya
// this mengembalikan object yang bersangkutan

/* 
______________________________________________________
*/


// cara 3
// object dengan constructor
function Halo() {
    console.log(this);
    console.log('halo');
}

// cara manggil constructor
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat

/* 
______________________________________________________
*/


// semuanya menghasilkan output halo yang sama, tapi yang harus dipahami adalah konteksnya berbeda!!!