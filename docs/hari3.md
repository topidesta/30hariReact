---
id: hari3
title: Hari Ketiga (Komponen Pertama)
sidebar_label: Hari 03
---

## Komponen Pertama Kita

2 Artikel sebelumnya dalam series ini telah kita diskusikan. Saatnya, lebih dalam lagi menulis code dan aplikasi react pertama.

Kita ubah File “Hello World” yang sebelumnya. Ini dia, beberapa perubahan kecil:

```javascript
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Hello world</title>
  <!-- Script tags including React -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react-dom.min.js"></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>
<body>
  <div id="app"></div>
  <script type="text/babel">
    var app = <h1>Hello world</h1>
    var mountComponent = document.querySelector('#app');
    ReactDOM.render(app, mountComponent);
  </script>
</body>
</html>
```

## Menjalankan Librari React

Kita sudah jalankan librari React sebagai `<script>`, di tag `<head>` dihalaman tersebut. Ini sangat penting menempatkan `<script>` kita sebelum kita memulai aplikasi dengan React, dengan katalain variabel `React` dan `ReactDOM` tidak akan didefinisikan diawal untuk kita gunakan.

Juga di tag `head` terdapat sebuat script lainnya, `babel-core`. apa itu?

### Babel

Pada hari ke-2 kita sudah bahas tentang ES5 dan ES6. Sudah disinggung ES6 masih tahap peremajaan. Untuk bisa gunakan ES6, langkah terbaiknya kita ubah ES6 Javascript ke ES5 Javascript yang sudah didukung oleh semua browser.

**Babel** adalah library untuk mengubah ES6 ke ES5.

Di tag `body` kita sudah punya script. Didalam script tersebut kita sudah definisikan Aplikasi React Pertama. Harap diperhatikan tag `script` dengan dituliskan `text/babel`.

```javascript
<script type="text/babel">
```

tag type tersebut memberikan kode ke Babel untuk segera mengeksekusi Javascript didalam tag body `script`, ini adalah cara untuk menulis aplikasi React menggunakan ES6 Javascript dan dipastikan bahwa Babel akan langsung merubah dibrowser, yang support hanya ES5.

### Sebuah Aplikasi React

Didalam tag body `script` Babel, kita sudah definisikan aplikasi React pertama. Aplikasi kita hanya menampilkan satu element, `<h1>Hello World</h1>`. Dipanggil oleh `ReactDOM.render()` yang sebetulnya aplikasi kecil kita ada dihalaman tersebut. Tanpa dipanggil oleh `ReactDOM.render()` maka tidak akan muncul di DOM. Argumen pertama dari `ReactDOM.render()` adalah apa yang mau dirender, sedangkan argumen kedua adalah dimana itu dirender.

```javascript
ReactDOM.render(<what>, <where>)
```

Kita sudah tuliskan aplikasi pertama kita, dengan menuliskan tag `h1`. Serius, ini tidak menarik. Aplikasi web yang keren terdiri dari inputan user, halaman yang dinamis setiap halaman dan berkomunikasi dengan server web. Baiklah, kita mulai dengan membangun aplikasi Kompoenen React.

## Komponen dan lainnya

Kita sudah jelaskan diawal dari seris ini, inti dari React adalah `berbagai komponen` cara tebaik untuk memahami komponen React ya menuliskannya. Kita akan tulis komponen React kita sebagai `class` ES6.

Kita lihat sebuah komponen kita sebut `App`. Seperti komponen React lainnya, class ES6 akan meng-extend `React.Component` class dari paket React.

```javascript
class App extends React.Component {
  render() {
    return <h1>Hello from our App</h1>;
  }
}
```

semua komponen React diakhiri dengan fungsi `render()`. fungsi ini akan mengembalikan nilai sebagai virtual DOM, dari sebuah elemen DOM Browser.

contoh [Play](play) kita akan ubah script Javascript tersebut ke komponen `App`.

```javascript
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Hello world</title>
  <!-- Script tags including React -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react-dom.min.js"></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>
<body>
  <div id="app"></div>
  <script type="text/babel">
    class App extends React.Component {
        render() {
            return <h1>Hello from our App</h1>
        }
    }

    var mount = document.querySelector('#app');
    ReactDOM.render(<App />, mount);
  </script>
</body>
</html>
```

bagaimanapun, kita tidak akan melihatnya dilayar, tau kenapa?

kita belum memberikan perintah ke React untuk menampilkan apapun di React atau dimana untuk merendernya. Kita butuh fungsi `ReactDOM.render()` untuk menampilkannya. Tambahkan fungsi tersebut,maka akan muncul dilayar kita.

```javascript
var mount = document.querySelector("#app");
ReactDOM.render(<App />, mount);
```

Harap diperhatikan, dalam app React kita, kita gunakan class `App` sebagai komponen DOM (seperti tag `<h1 />` dan `<div />`). Disini kita gunakan sebagai element dengan ditutup langsung `<App />`.

Ide dari komponen-komponen React seperti element dihalaman yang seperti pohon (bercabang), hanya sebuah cabang browser native.

Saat kita sekarang render komponen React, aplikasi kita masih jauh dari kehebatan atau interaktif. Berikutnya, kita akan lihat bagaimana memanfaatkan komponen React sebagai pengolah data dan bersifat dinamis.

Tapi, dilangkah selanjutnya dalam seris ini, kita akan mendalami bagaimana sebuah layer komponen. Komponen bercabang adalah fondasi dari aplikasi React yang glamor.

-- End of Day 3
