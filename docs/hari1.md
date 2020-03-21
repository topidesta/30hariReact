---
id: hari1
title: Hari Ke-01
sidebar_label: Hari Pertama
---

## Fokus

Hari ini kita akan belajar penuh dari awal. Kita akan belajar Apakah itu React dan mengapa begitu sangat tertarik. Kita akan diskusikan kenapa kita harus manfaatkan React.

Selama 30 hari penuh, kamu akan merasa antusias dalam beberapa bagian dari React (https://facebook.github.io/react/) framework web dan bagian lainnya.

Setiap hari selama 30 hari berpetualang, kita akan melaksanakan materi harian, jadi akhir seri pembelajaran, kamu tidak hanya faham tetntang aturan, konsep dan catatan lainnya, bagaimana framework bekerja tapi juga, dapat memanfaatkan React di Aplikasi Web selanjutnya.

Kita mulai dengan melihat video ini (https://www.youtube.com/watch?v=1RW3nDRmu6k) sebagai awal dari pembelajaran, awal yang bagus.

## Apa Itu React?

React adalah Library dari JavaScript untuk membangun sebuah Tampilan. Sebuah View Layer untuk aplikasi web.

Inti dari semua aplikasi React, adalah Komponen. Komponen itu sendiri terdiri dari modul yang merender keluaran data. Kita dapat menuliskan tampilan element, seperti button atau input, sebagai Komponen React. Komponennya sangat mudah dicampur. Sebuah komponen mungkin terdiri dari satu atau dua komponen lainnya dalam membangun tampilannya.

Untuk menuliskan Komponen React yang dapat merespon beberapa element tampilan. Kita dapat mengaturnya di level komponene tertinggi yang dapat menggambarkan struktur dari aplikasi kita.

Sebagai contoh, sebuah form. Sebuah form mungkin akan banyak tampilan elemen, seperti input, label dan buttons. Setiap elemen didalamnya dapat kita tulis dengan Komponen React. Kita akan tulis dalam bentuk level tertinggi dari komponen itu sendiri. Sebuah komponen form mungkin lebih spesifik dalam struktur dari form dan didalamnya sendiri terdapat tampilan elemen.

Intinya, setiap komponen React sangat tergantung dari data secara umum. Kompleks, tampilan yang menarik seringkali melibatkan data yang kompleks dan state aplikasi. Pada area permukaan React sangat dibatasi dan tergantung dari kita, tools apa yang dapat diantisipasi bagian dari masalah. Kita akan bahas lebih dalam kelak di pelatihan.

## Baik, Bagaimana memanfaatkan React?

React adalah Framework Javascript. Menggunakan Framework semudah menambahkan file Javascript ke file HTML dan gunakan React Export di aplikasi.

Misalkan, Hello World, dalam React website tertulis seperti ini:

```javascript
<body>
    <div id="app"></div>
    <script type="text/javascript">
        ReactDOM.render(
            <h1>Hello World</h1>, document.querySelector('#app')
        )
    </script>
</body>
```

Wow, sedikit menakutkan, Kode JavaScript ditambahkan “Hello World” dalam baris yang dapat dirubah. Harap dicatat, kita hanya menambahkan script JavaScript agar dapat bekerja.

## Bagaimana Cara Kerjanya?

Tidak seperti yang lain, itu hanya predecessors, React dapat bekerja tanpa langsung ke DOM (Data Object Manipulation) browser secara langsung, tapi dalam bentuk Virtual DOM. Begitulah, dibanding manipulasi sebuah object document dalam browser setelah perubahan data (dimana akan terkesan lama) dalam merubah sebuah DOM yang dibangun dan berjalan di memory. Setelah virtual DOM diubah, React akan menentukan apa yang telah dirubah di DOM browser anda.

Sebuah React Virtual DOM yang eksis di memori dan di gambarkan oleh DOM browser. Karena inilah, ketika kita membuat sebuah komponen React, kita tidak langsung menuliskan langsung ke DOM, tapi kita menuliskan sebuah komponen virtual, dan React akan merubahnya ke dalam DOM browser.

Dalam artikel selanjutnya, kita akan lebih memahaminya nanti, untuk apa kita bangun komponen React dan mempelajari JSX dan menuliskan komponen pertama kita.


-- End Of Day 1
