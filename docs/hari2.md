---
id: hari2
title: Hari Ke-02
sidebar_label: Hari Kedua
---

## Apa Itu JSX?

Sekarang kita tahu apa itu React, saatnya kita lihat beberapa aturan dan konsep yang akan muncul di beberapa pembelajaran selanjutnya.

Diartikel sebelumnya, kita sudah mengetahui apa itu React dan diskusikan cara kerjanya. Dalam artikel ini, kita akan membahas bagian dari Ekosistem React, yaitu ES6 dan JSX.

## JSX/ ES5/ ES6, Apakah Itu??

Dalam pencarian di Internet untuk material React, tidak masalah jika disebut JSX, ES5 dan ES6, Kebanyakan lawan kata membuat pusing pastinya.

ES5 (arti ES artinya ECMAScript) secara dasar ialah sebuah “javascript pada umumnya”, update ke-5 telah ke javascript, yang selesai pada 2009. Semua scripts sudah didukung oleh semua browser beberapa tahun belakangan. Meskipun, kamu menulis atau melihat beberapa Javascript di masalalu, itu adalah ES5.

ES6 merupakan versi terbaru dari JavaScript yang sudah ditambahkan sintaks dan fungsinya. Yang selesai pada 2015. ES6 didukung oleh semua browser. Tapi, itu terjadi ketika browser lama sudah lagi tidak didukung, sebagai contoh Internet Explorer 11, tidak mendukung ES6 tapi, mencakup 12% para pengguna secara umum.

Untuk menjalankan keuntungan memanfaatkan ES6 sekarang, ada beberapa hal yang harus dilakukan agar bekerja di setiap browser, diantaranya:

1. Kita harus trasnpile (merubah) code, agar semua browser faham tentang javascript. Itu artinya merubah ES6 Javascript ke ES5 Javascript.
2. Kita harus menambahkan sebuah shim atau polyfill tambahan agar fungsi dari ES6 dapat bekerja, dimana tidak semua browser memilikinya.

Kita akan coba sedikit setelah pemahasan kali ini.

Hampir Semua kode dalam pembelajaran kali ini sangat mudah di ubah ke ES5. Dalam beberapa kasus kita gunakan ES6, dan akan menjelaskan keuntungan mamanfaatkanya.

Kita sudah pelajari, Komponen React memiliki Fungsi “Render” yang bekerja sebagai keluaran HTML, dimana Komponen React Berada. JavaScript eXtention, atau biasa disebut JSX, adalah Ekstensi React yang mengijinkan kita menulis JavaScript seperti HTML.

Baiklah, inilah beberapa contoh komponen React, agar memiliki gambaran dari fungsi Render, h1 sebagai tag HTML. Jsx membolehkan mendeklarasikan element HTML sebagai Komponen dari React.

```javascript
class HelloWorld extends React.Component {
    render() {
        return(
            <h1 className="large">Hello World</h1>
        );
    }
}
```

Fungsi render di komponen HelloWorld terlihat seperti keluaran HTML, tapi itu adalah JSX. Sebuah JSX dapat metranslate ke JavaScript Umum saat disimpan-reload. Komponen tersebut terlihat seperti berikut, setelah di translate.

```javascript
class HelloWorld extends React.Component {
    render() {
        return(
            React.createElement(
                'h1',
                {className: 'large'},
                'Hello World'
            )
        );
    }
}
```

Lihat JSX seperti HTML, sebetulnya itu hanyalah cara menulis lain dari sebuah potongan kodel deklarasi React.createElement(). Ketika komponen dirender, itu hanya sebuah baris Komponen React, atau biasa disebut “Virtual Represntation dari HTML”, jadi Element react menentukan apa yang dirubah berdasarkan DOM sebenarnya di elemen react. Komponen HelloWorl, sebuah HTML yang terbentuk ke DOM akan terlihat seperti ini:

```javascript
<h1 className="large">Hello world</h1>
```

Dalam sintak tersebut itu adalah komponen React pertama ialah ES6 sintak. Yang dapat menuliskan object dengan OO (object oriented) style. ES6 sintak class yang di translate seperti ini:

```javascript
var helloWorld = function(){};
Object.extends(HelloWorld, React.Component)
HelloWorld.prototype.render = function(){};
```

Karena JSX ialah JavaScript, kita tidak dapat menggunakan katakunci javascript, termasuk kata **class** dan **for**.

React memberikan kita penambahan attribute className. Kita gunakan itu di HelloWorld yaitu kelas large di h1 tag. Ada beberapa atribute, seperti for, untuk React ke htmlFor sebagai for yang mana itu katakunci. Kita akan lihat saat kita belajar nanti.

Jika kita ingin menuliskan murni JavaSCript dibanding memanfaatkan JSX compiler, kita bisa tuliskan fungsi React.createElement()  dan tidak usah khawatir akan abstraction layer. Kita suka JSX karena memudahkan membaca komponen yang kompleks, berikut contohnya:

```javascript
<div>
    <img src="profile.jpg" alt="Profile Photo" />
    <h1>Welcome to React!</h1>
</div>
```

Dalam JavaScript akan terbaca oleh browser sebagai berikut:

```javascript
React.createElement("div", null, 
    React.createElement("img", {src:"profile.jgp", alt: "Profile Photo"}),
    React.createElement("h1",null,"Welcome to React!")
)
```
Sekali lagi, kita akan lewati dahulu JSX dan cara penulisannya, sintak JSX sangat menggoda dalam menampilkan element HTML.

Sekarang kita faham apa itu JSX, kita akan menulis komponen React pertama, gabunglah dengan kami, ketika kita menuliskan aplikasi React Pertama.

-- End of Day 2
