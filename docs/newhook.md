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

Sebuah hook `useEffect` dapat membantu anda menambahkan performa disisi fungsi komponen. Bisa untuk pemanggilan API, perubahan DOM, semua yang kamu inginkan untuk 'menambahkan' sesuatu untuk terjadi.

Dengan menggunakan hook useEffect, React mengetahui bahwa kamu peduli terhadap aksi setelah selesai dirender.

Baiklah, kita akan melihat contohnya. Kita akan gunakan hook `useEffect()` untuk memanggil API dan mendapatkan responenya.

```javascript
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  let [names, setNames] = useState([]);

  useEffect(() => {
    fetch("https://uinames.com/api/?amount=25&region=nigeria")
      .then(respone => respone.json())
      .then(data => {
        setNames(data);
      });
  });

  return (
    <div className="App">
      <div>
        {names.map((item, i) => (
          <div key={i}>
            {item.name} {item.surname}
          </div>
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Dalam contoh ini kita gunakan keduanya, yaitu `useState` dan `useEffect` dikarenakan **dapat memudahkan menampilkan API yang dipanggil menjadi sebuah state**

```javascript
import React, { useState, useEffect } from "react";
```

### Ambil Data dan Ubah State

Untuk menggunakannya, kita perlu sebuah tempat aksi menggunakan fungsi `useEffect`, kita lewatkan aksinya sebagai fungsi tak dikenali, sebagai argumen pertama.

Dicontoh sebelumnya, kita memanggil sebuah endpoint API yang mengembalikan nilai berupa daftar nama. Ketika sudah di `response`, kita ubah menjadi sebuah JSON dan mengeset kestate dengan menggunakan `setNames(data)`.

```javascript
let [names, setNames] = useState([]);

useEffect(() => {
  fetch("https://uinames.com/api/?amount=25&region=nigeria")
    .then(response => response.json())
    .then(data => {
      setNames(data);
    });
});
```

### Performa useEffect()

Ada hal yang harus dicatat dalam menggunakan `useEffect` yang kurasa saat ini.

Pertama kita harus memikirkan, secara default, `useEffect` akan selalu dipanggil disetiap render, kabar baiknya kita tidak pusing memikirkan putaran data, tapi ada kabar buruknya, kita tidak ingin selalu ada request/ permintaan HTTP, setiap render ulang (dikasus ini). Untuk

Kita bisa gunakan argumen kedua, dalam pemanfaatan `useEffect`, seperti yang kita lakukan sekarang. Argumen kedua dari `useEffect` adalah sebuah list variable yang ingin kita lihat dan selanjutnya kita hanya jalankan hanya ketika nilainya berubah.

Dikasus ini, dicatat ya, kita menambahkan sebuah **array kosong** sebagai argumen kedua. Ini memberikan informasi ke React bahwa kita panggil ketika komponen sudah termounted.

> Untuk lebih dalam apa itu performa Effect, silahkan kehalaman [ini](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects).

Begitu pula `useState`, `useEffect` dapat melewatkan beragam instance, dimana artinya kita dapat menambahkan beberapa fungsi `useEffect` sekaligus.

## Contoh Hook `useContext()`

### Point Utama

Context dalam react merupakan cara untuk komponen child mengakses nilai dari komponen parent.

Untuk memahaminya, ketika membangun aplikasi React, terkadang kita butuh sebuah nilai dari atas hingga kebawah seperti pohon. Tanpa context, melewati sebuah props tidak akan berjalan dikomponen dengan semestinya, dimana diperlukan. Tidak hanya merepotkan dalam melewatkan props dalam komponen, dapat juga pengenalan yang tidak benar saat selesai.

Melewati prop hingga kebawah seperti tree (cabang), komponen yang tidak berelasi seperti saling terkait, biasa disebut 'props drilling'.

Contex dalam react dapat menyelesaikan masalah dari 'props drilling' dengan mengijinkan nilai dari sebuah tree (cabang) komponen, ke setiap komponen yang membutuhkan nilai tersebut.

### Cara Mudah menggunakan Context

Dengan `useContext`, kita akan memanfaatkan Context begitu sangat mudah.

Dengan fungsi `useContext()` sebagai sebuah objek, dimana sebuah nilai akan kembali dari `React.createContext()` dan mengembalikan nilai sebelumnya. Lihat contoh dibawah ini:

```javascript
import React, { useContext } from "react";
import ReactDOM from "react-dom";

const JediContext = React.createContext();

function Display() {
  const value = useContext(JediContext);
  return <div>{value}, I am your Father.</div>;
}

function App() {
  return (
    <JediContext.Provider value={"Luke"}>
      <Display />
    </JediContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

`https://codesandbox.io/s/3q2x15l4rm`

Dalam kode tersebut, kita membuat sebuah context bernama `JediContext` menggunakan `React.createContext()`.

Kita gunakan `JediContext.Provider` di komponen App dan mengeset nilai dengan nama `"Luke"`. Yang artinya apapun context objek yang dibaca dalam sebuah tree, dapat diambil nilainya.

Untuk membaca nilai kita membuat fungsi `Display()`, kita panggil `useContext`, kita tambahkan sebagai argumen di `JediContext`.

Kita lewati objek context, yang kita dapatkan dari `React.createContext` dan secara otomatis nilainya akan keluar. Ketika ada perubahan, hook ini akan otomatis mentrigger untuk melakukan perbuahan dengan nilai terakhir.

### Memanfaatkan untuk Aplikasi Besar

Kita sudah buat `JediContext` diantara kedua komponen diatas, tapi dalam aplikasi yang besar, sebuah komponen `Display` dan `App` memungkinkan terdapat di file yang beda. Jadi bagaimana kita mengakses melalui sebuah file objek dari `JediContext` tersebut?

Jawabannya ialah, **kita akan buat sebuah file yang mengexport nilai dari `JediContext`**.

Sebagai contoh, kita akan buat sebuah file, bernama `context.js`, isinya mungkin seperti ini:

```javascript
const JediContext = React.createContext();
export { JediContext };
```

dan didalam `App.js` dan `Display.js`, kita harus import dengan menuliskan seperti ini:

```javascript
import { JediContext } from "./context.js";
```

(Thanks, [Dave](https://twitter.com/dceddia)!)

## Contoh Hook `useRef()`

Refs merupakan cara React dalam mengakses sebuah element dimethod `render()`.

Jika kamu baru dalam React refs, [kamu bisa baca pengenalan React Refs disini](refs).

Sebuah fungsi `useRef()` mengembalikan nilai dari sebuah objek ref.

```javascript
const refContainer = useRef(initialValue);
```

### Form Input dan useRef()

Kita lihat contoh menggunakan hook `useRef`.

```javascript
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

function App() {
  let [name, setName] = useState("Nate");

  let nameRef = useRef();

  const submitButton = () => {
    setName(nameRef.current.value);
  };

  return (
    <div className="App">
      <p>{name}</p>

      <div>
        <input ref={nameRef} type="text" />
        <button type="button" onClick={submitButton}>
          Submit
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Dalam contoh tersebut, kita menggunakan hook `useRef()` sebagai penghubung dari `useState()` dalam merender nilai dari tag `input` kedalam sebuah tag `p`.

Sebuah ref sendiri dipakai kedalam variabel `nameRef`. Sebuah variabel `nameRef` dapat digunakan sebagai fild input dengan mensetting sebagai `ref`. Intinya, setiap konten dari fild input akan diakses oleh ref.

Sebuah tombol submit memiliki `onClick` handler, dinamakan `submitButton`. Sebuah fungsi `submitButton` memanggil `setName` melalui `useState`. Kita sudah jelaskan `useSate` sebelumnya, `setName` akan digunakan untuk mengeset sebuah state `name`. Untuk mengambil nama dari tag `input`, kita akan gunakan `nameRef.current.value`.

Ada hal lainnya yang harus jadi perhatian tentang `useRef` yaitu fakta bahwa kita bisa gunakan tidak hanya dengan attribue `ref`.

## Penggunaan Kostum Hook

## Testing untuk React Hook

### Testing dengan `useState()`

### Testing dengan `useEffect()`

### Testing dengan `useRef()`

## Reaksi Komunitas terhadap Hook

## Perbedaan Hooks (Sumber Lain)

## Masa Depan Hook

## Sumberlain
