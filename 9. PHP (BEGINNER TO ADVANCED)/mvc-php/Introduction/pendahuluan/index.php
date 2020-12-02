<!-- 
  ### - MVC (Model, View, dan Controller) - ###
  
  # Pengertian
  - Pola arsitektur pada perancangan perangkat lunak berorientasi objek

  # Pengerjaannya
  - Kita akan memisahkan komponen-komponen di dalam halamannya menjadi 3 komponen utama:
  1. Model : Data
     - Representasi pengetahuan
     - Mengelola data
     - Logika bisnis
  2. View : Tampilan
     - Output, apa yang dilihat oleh user
     - Representasi visual dari model
     - Lapisan presentasi
  3. Controller adalah Proses (komponen utama yang mengendalikan alur prosesnya)
     - Perantara antara model dan view
     - Menangani pemrosesan pada aplikasi
     - Menangani aksi dari user (misal tombol di klik, atau user mengisi form)
                                        Controller
                                      /           \
                                     /             \
                                  Model           View
  
  # Kenapa harus belajar MVC
  - Organisasi dan struktur kode
  - Untuk memisahkan logic dan tampilan
  - Perawatan kode
  - Implementasi konsep OOP yang sudah dipelajari
  - Digunakan oleh banyak Web Application Framework

  # Framework yang menggunakan konsep MVC
  1. PHP -> CodeIgniter, Laravel, Yii, dll.
  2. Java -> Spring MVC, JSF, Struts, dll.
  3. Phython -> Django, CherryPy, dll.
  4. Ruby -> Ruby on Rails, Sinatra, dll.
  5. Javascript -> AngularJS, React, Backbone.js, dll.

  # Framework advanced penjelasan
  - Sebetulnya framework-framework yang meggunakan MVC itu memiliki arsitektur yang lebih kompleks lagi dari ini, tidak hanya ada 3 tadi (model, view, dan controller). Dia juga memiliki komponen tambahan lain.
  * Contohnya sebuah framework yang namanya CodeIgniter
    - Application flow pada CodeIgniter
      1. Kita pasti mengakses halaman index.php nya
      2. Setelah itu dia akan diarahkan ke sebuah komponen yang namanya routing (menentukan bagian mana yang akan diakses, controller mana yang akan diakses)
      3. Setelah itu dia akan masuk dulu ke komponen security untuk membersihkan request yang dikirim di routing ini apabila ada sesuatu yang jahat, setelah aman?????
      4. Nah setelah aman dia akan masuk ke controller, sesuai dengan routingnya, misalkan dah ketawan nih controller home nih. Nah dari situ controllnya akan menentukan apakah dia butuh model atau tidak, apakah dia membutuhkan libraries atau tidak, apakah dia butuh helpers atau tidak, apakah dia butuh plugins atau tidak dan apakah dia butuh script atau tidak. Nah pengolahannya itu ya dicontroller sesi seperti itu. Nah setelah itu controller juga akan menentukan view mana yang akan digunakan. 
      5. Terus terjadilah pemilihan view mana yang akan dikeluarkan, ketika sudah dipilih maka
      6. Masuk ke komponen caching yang dimana sebelum diberikan lagi ke user dia harus masuk dulu ke caching ini. Tujuannya agar mempercepat saja. Misal kalau halaman tersebut sudah diakses oleh user, data tersebut sudah pernah dikirim oleh user, prosesnya tidak perlu dilakukan secara penuh, langsung aja lewat cachingnya.
      7. Terakhir dikirimkan lagi ke user.
-->