// refactoring adalah sebuah proses mengubah kode agar menjadi lebih 'baik' tanpa mengubah fungsionalitasnya.

/* kenapa harus melakukan refactoring? */
// Readibility : keterbacaannya atau memudahkan orang lain dapat dengan mudahh membaca kode kita (karena buat kode pasti dilakukan oleh tim)
// DRY (Don't Repeat Yourself) : Efisiensi lah lebih tepatnya
// Testability : Penulisan kode agar mudah saat nanti dilakukan pengujian
// Performance : bagaimana agar kita dapat membuat kode yang dapat meningkatkan performance dengan baiik, misal : ketka kita menggunakan looping dengan baik
// Maintability : ini agar bisa memudahkan unntuk dapat dengan mudah dikelola atau dikembangkan.

// bagaimana membuat kode sedikit menjadi lebih efisien
/* refactoring sederhana */
// kodenya dari :
/* function jumlahVolumeDuaKubus(a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

alert(jumlahVolumeDuaKubus(8, 3)); */

// mejadi efisien apabila kita:
function jumlahVolumeDuaKubus(a, b) {
    return (a * a * a) + (b * b * b);
}

alert(jumlahVolumeDuaKubus(8, 3));

// perlu diingat :
/* kketika kita sudah selesai membuat kode program.. kalau masih ada waktu kilas balik dulu siapa tau ada yang bisa di efisiensikan lagi kodenya */