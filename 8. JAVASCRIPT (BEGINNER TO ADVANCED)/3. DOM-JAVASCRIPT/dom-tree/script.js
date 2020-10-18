// DOM tree adalah representasi elemen2 html di dalam browser kita
// implementasinya dalam bentuk pohon
// seluruh elemen kita anggap sebuah node/simpul
// node paling atas itu kita namain node root (document)
// elemen terluarnya ada html dll deh
// semua element html kita sebut element
// href atau yang bersangkutan dengan elemen kita sebut atribut
// terus tulisan dianggap mmenjadi text

// jadi tipe node :
// elemen
// text
// attribute
// dan masih banyak lagi sebenarnya

// nodeList vs HTML Collection
// node : brrti kita hanya memilih satu
// nodeList : kita memilih lebih  dari satu  dan harus tipenya apa saja
// HTMLCollection : kita hanya memilih lebih dari satu tapi cuma bisa memilih elemen HTML saja

// HTMLCollection bersifat live dan nodeList tidak

// struktur hierarki DOM sama sekali seperti silsilah keluarga

// kayak :
// 1. Root node
/* - node yang menjadi sumber dari semua node lain di dalam DOM (document) */
// 2. Parent Node
/* - node yang berada 1 tingkat diatas node yang lain
   - body dalah parent dari h1, p, p, div dan a */
// 3. Child Node
/* - node yang berada 1 tingkat dbawah node yang lain
   - h1 adalah child dari body */