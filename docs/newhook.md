---
id: newhook
title: Hooks di React
sidebar_label: Hooks di React (Siklus Baru)
---

## Pengenalan Hooks di React

Jika sering baca twitter mungkin Hooks sebuah fiture react yang baru yang menakutkan, tapi mungkin anda akan bertanya, **bagaimana cara kita menggunakannya?**, dalam buku ini kita akan menjelaskan dengan contoh bagaimana menggunakan hook.

### Motivasi dibalik Hook

Ketika dasar design berdasarkan komponen, kita seringkali menggunakan berukangkali _views_ diaplikasi, satu masalah utama buat developer React adalah, **bagaimana menggunakan kembali komponen antara logika state (data)**. Ketika kita punya komponen yang saling membagi, dan itu bukan solusi untuk digunakan dan terkadang terjadi duplikasi logika di konstraktor dan method siklusnya.

Ada beberapa cara secara tradisional misalkan,

- urutan komponen tertinggi
- merender props secara kompleks

tapi pola keduanya punya gambaran yang akan menjadikan kode dasar menjadi sangat kompleks/ sulit.

:::info Hooks masih Alpha
Sebelum mendalami lebih jauh, harap dicatat, bahwa hook masih belum selesai, dan sering membuka [dokumentasi resmi,](https://reactjs.org/docs/hooks-intro.html) untuk bacaan yang lebih mendalam, karena mereka suka menjelaskan lebih dalam apa itu Hooks.
:::

## Cara Kerja Hooks

Jika anda familiar dengan React, satu cara terbaik ialah memahami Hooks dengan cara bagaimana melihat kebiasan kita menggunakan "class komponen" dengan hooks.

Menggunakan kembali komponen class kita akan sering:

- mengatur **`state`**
- menggunakan siklus react seperti **`componentDidMount()`** dan **`componentDidUpdate()`**
- akses context (dengan setting **`contextType`**)

dengan Hooks react, kita akan melakukan duplikasi atau kesamaan komponen functional:

- State komponen menggunakan hook **`useState()`**
- siklus react seperti **`componentDidMount()`** dan **`componentDidUpdate()`** menggunakan hook seperti **`useEffect()`**.
- akses context menggunakan **`useContext()`**

## Menggunakan Hooks

Kamu dapat memulai hooks dengan setting package.json dengan **react** dan **react-dom** dengan nama **next**.

```javascript
// package.json
"react": "next",
"react-dom": "next"
```

## Contoh Hook `useState()`

State adalah bagian penting dari React. Mereka akan mengijinkan kita mendeklarasikan sebuat state variabel data yang digunakan di aplikasi kita. dengan Komponen class, kita biasa gunakan seperti berikut ini.

```javascript
class Contoh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
}
```

Sebelum hooks, state selalu digunakan di komponen class, sudah disinggung sebelumnya, **hooks bisa digunakan di komponen functional**.

Kita liat contoh dibawah. Disini kita akan membuat sebuah switch lampu SVG, dimana merubah warna tergantung state, disini kita gunakan hook **`useState`**. Berikut ini contoh keseluruhannya, kita akan bahas apa yang terjadi didalamnya.

```javascript
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function LightBulb() {
  let [light, setLight] = useState(0);

  const setOff = () => setLight(0);
  const setOn = () => setLight(1);

  let fillColor = light === 1 ? "#ffbb73" : "#000000";

  return (
    <div className="App">
      <div>
        <LightbulbSvg fillColor={fillColor} />
      </div>

      <button onClick={setOff}>Off</button>
      <button onClick={setOn}>On</button>
    </div>
  );
}

function LightbulbSvg(props) {
  return (
    /*
      Below is the markup for an SVG that is the shape
      of a lightbulb.
      The important part is the `fill`, where we set the
      color dynamically based on props
    */
    <svg width="56px" height="90px" viewBox="0 0 56 90" version="1.1">
      <defs />
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="noun_bulb_1912567" fill="#000000" fill-rule="nonzero">
          <path
            d="M38.985,68.873 L17.015,68.873 C15.615,68.873 14.48,70.009 14.48,71.409 C14.48,72.809 15.615,73.944 17.015,73.944 L38.986,73.944 C40.386,73.944 41.521,72.809 41.521,71.409 C41.521,70.009 40.386,68.873 38.985,68.873 Z"
            id="Shape"
          />
          <path
            d="M41.521,78.592 C41.521,77.192 40.386,76.057 38.986,76.057 L17.015,76.057 C15.615,76.057 14.48,77.192 14.48,78.592 C14.48,79.993 15.615,81.128 17.015,81.128 L38.986,81.128 C40.386,81.127 41.521,79.993 41.521,78.592 Z"
            id="Shape"
          />
          <path
            d="M18.282,83.24 C17.114,83.24 16.793,83.952 17.559,84.83 L21.806,89.682 C21.961,89.858 22.273,90 22.508,90 L33.492,90 C33.726,90 34.039,89.858 34.193,89.682 L38.44,84.83 C39.207,83.952 38.885,83.24 37.717,83.24 L18.282,83.24 Z"
            id="Shape"
          />
          <path
            d="M16.857,66.322 L39.142,66.322 C40.541,66.322 41.784,65.19 42.04,63.814 C44.63,49.959 55.886,41.575 55.886,27.887 C55.887,12.485 43.401,0 28,0 C12.599,0 0.113,12.485 0.113,27.887 C0.113,41.575 11.369,49.958 13.959,63.814 C14.216,65.19 15.458,66.322 16.857,66.322 Z"
            id="Shape"
            fill={props.fillColor}
          />
        </g>
      </g>
    </svg>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<LightBulb />, rootElement);
```

https://mpnoljl19.csb.app/

### Fungi hanya sebuah Komponen

Dikode atas kita bisa liat kita menggunakan **useState** dari react. **useState** adalah cara terbaru yang biasa digunakan oleh **this.state** yang biasa kita gunakan.

Selanjutnya, dicatat bahwa komponen tersebut adalah **sebuah fungsi bukan sebuah class**. Menarik!

### Menulis dan Membaca State

Dalam fungsi ini, kita menggunakan **useState** dalam menulis sebuah state variabel:

```javascript
let [light, setLight] = useState(0);
```

**`useState`** digunakan untuk mendeklarasikan sebuah variabel state dan kita bisa inisialisasikan dengan tipe apapun (tidak seperti sebuah class, kita butuh sebuah objek).

seperti terlihat, kita menggunakan kembali nilai dari **useState**.

- nilai pertama, **light** dalam kasus ini, sebagai state default, seperti **this.state**
- nilai kedua, **setLight** merupakan fungsi untuk merubah nilai state pertama, seperti **this.setState**

selanjutnya, kita akan buat 2 fungsi dimana setiap state punya nilai berbeda, yaitu 0 atau 1.

```javascript
const setOff = () => setLight(0);
const setOn = () => setLight(1);
```

lalu, kita gunakan fungsi tersebut sebagai event handlers di tombol, seperti dibawah ini:

```html
<button onClick="{setOff}">Off</button> <button onClick="{setOn}">On</button>
```

### React mencatat Sebuah State

Ketika kita pencet "On", **`setOn`** terpanggil, dimana kita panggil dengan **`setLight(1)`** yang akan merubah nilai dari **light** untuk dirender. Sedikit seperti sulap, tapi inilah yang terjadi, dimana React mencatat semua nilai divariabel dan melewatkan di nilai baru untuk dilakukan render ulang dikomponen tersebut.

Lalu, kita gunakan state sebelumnya untuk menentukan sebuah bohlam harus "on" atau tidak. Itu saja, kita akan isi warna dari SVG tergantung dari **light**. jika **light** 0 maka off, lalu isi warna **`fillColor`** dengan #00000 atau jika 1 (on) makan #ffbb73.

### Beragam State

Ketika kita tidak menggunakan contoh diatas, kita bisa gunakan beragam state dengan memanggil **`useState`** lebih darisekali, sebagai contoh:

```javascript
let [light, setLight] = useState(0);
let [count, setCount] = useState(10);
let [name, setName] = useState("yomi");
```

:::warning DICATAT!
Untuk memanfaatkan sebuah Hooks, kita harus teliti. Hal yang utama ialah, hooks harus ditempatkan dibagian atas sebuah function kodingan anda. [Lihat aturan maen mereka](https://reactjs.org/docs/hooks-rules.html).
:::

## Contoh Hook `useEffect()`

### Ambil Data dan Ubah State

### Performa useEffect()

## Contoh Hook `useContext()`

### Point Utama

### Cara Mudah Untuk Digunakan

### Memanfaatkan untuk Aplikasi Besar

## Contoh Hook `useRef()`

### Form Input dan useRef()

## Kostum Hook

## Testing untuk React Hook

### Testing dengan `useState()`

### Testing dengan `useEffect()`

### Testing dengan `useRef()`

## Reaksi Komunitas terhadap Hook

## Perbedaan Hooks (Sumber Lain)

## Masa Depan Hook

## Sumberlain
