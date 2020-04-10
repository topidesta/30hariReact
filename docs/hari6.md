---
id: hari6
title: Hari Keenam - State
sidebar_label: Hari 06 - State
---

Hari ini kita akan mulai dengan komponen stateful di React, saat kapan dan bagaimana penggunaan `state`

Dalam sepekan ini kita sudah menjalankan aplikasi dengan React. Kita sudah mencoba JSX, membangun komponen pertama, membuat komponen yang saling terhubung `parent-child` dan menambahkan data dikomponen data properties dengan React. Kita akan mengenalkan hal utama yang belum didiskusikan tentang React, yaitu `state`.

## Sebuah `State`

React tidak mengijinkan kita memodifikasi `this.props` setiap komponen untuk suatu alasan. Bayangkan jika kita dapat merubah prop `title` pada komponen `Judul`. Kita akan dihadapkan dengan kebingungan data dan itu merupakan ide yang buruk merubah variabel di komponen child oleh komponen parent.

Bagaimanapun, suatuwaktu sebuah komponen diijinkan untuk merubah, tapi state miliknya sendiri, sebagai contoh, merubah `aktif` atau sebuah waktu/ stopwath, sebagai contoh. Ketika hanya gunakan `props` sebisa mungkin, jangan dipaksakan, jika kita butuh untuk perubahan, makan gunakan `state` dikomponen, sebagaimana React berikan.

`state` dalam komponen digunakan secara internal dan dapat diakses oleh komponen child (semua komponen child). Mirip bagaimana kita akses `props` disetiap komponen. kita bisa gunakan `this.state` disetiap komponen. Kapanpun state berubah (melalui `this.setState()` function), komponen akan melakkukan `re-render` ulang.

Sebagai contoh, kita buat komponen jam, yang menampilkan waktu hari ini, bisa dicek di halaman [play](play).

Meskipun komponen jam itu terlihat mudah, tapi itu tidak menjelaskan state dimana waktu sedang berjalan. Tanpa `state`, kita tidak akan bisa melakukan perhitungan dan merender ulang komponen React, tapi komponen halaman/ utama tak perlu rendering ulang, mungkin membingungkan dan perlahan kita akan integrasikan menjadi aplikasi yang kompleks.

Kita akan buat komponen kita namakan, `Clock`. Sebelum kita mencoba state, kita buat dahulu komponen dan fungsi render(). Kita butuh sebuah nomor dan angka nol (0) sebagai persiapan, jika nomor lebih kecil dari 10 dan kita set menjadi `am/pm`. Hasil akhir mungkin akan seperti ini:

```jsx live
class Clock extends React.Component {
  render() {
    const currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds(),
      ampm = hours >= 12 ? "pm" : "am";

    return (
      <div className="clock">
        {hours == 0 ? 12 : hours > 12 ? hours - 12 : hours}:
        {minutes > 9 ? minutes : `0${minutes}`}:
        {seconds > 9 ? seconds : `0${seconds}`} {ampm}
      </div>
    );
  }
}
```

> Altenative
>
> ```javascript
> ("00" + minutes).slice(-2);
> ```
>
> Tapi kita contohkan yang mudah difahami.

Jika kita render komponen `Clock`, kita akan lihat perubahan jika kita render ulang, dengan refresh halaman. Itu bukanlah jam yang berguna (saat ini). Untuk merubah waktu statis dalam komponen `Clock` kita akan ubah, agar waktu berubah setiap second.

Untuk melakukannya, kita harus mencatat waktu `sekarang` dari komponen, untuk melakukannya, kita butuh sebuah inisiasi nilai state.

Jadi, kita akan buat fungsi `getTime()` yang akan memberikan nilai dari `jam`, `menit`, dan `detik` dan nilai `ampm`. Kita akan buat fungsi untuk menyimpan state tersebut.

```javascript
class Clock extends React.Component {
  //...
  getTime() {
    const currentTime = new Date();
    return {
      jam: currentTime.getHours(),
      menit: currentTime.getMinutes(),
      detik: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? "pm" : "am"
    };
  }
  // ...
}
```

diclass style ES6, kita bisa set state dikomponen pada `constructor()` dengan menggunakan nilai `this.state` (return dari fungsi `getTime()`).

```javascript
constructor(props) {
    super(props);
    this.state = this.getTime();
}
```

`this.state` terlihat seperti sebuah objek

```json
{
  "jam": 11,
  "menit": 9,
  "detik": 11,
  "ampm": "am"
}
```

:::warning 
Harap diperhatikan `super(props)` harus ada di constructor, jika tidak akan muncul eror
:::

Sekarang kita punya `this.state` yang sudah didefinisikan di komponen `Clock`, kita dapat letakkan di fungsi `render()`, sekarang kita ubah komponen `Clock` kita:

```javascript
class Clock extends React.Component {
  render() {
    const { jam, menit, detik, ampm } = this.state;

    return (
      <div className="clock">
        {jam == 0 ? 12 : jam > 12 ? jam - 12 : jam}:
        {menit > 9 ? menit : `0${menit}`}:{detik > 9 ? detik : `0${detik}`}{" "}
        {ampm}
      </div>
    );
  }
}
```

Ketimbang kita ubah data secara langsung, kita bisa ubah sebuah `state` dari komponen dan memisahkan dengan fungsi `render()` untuk menajemen data saja. Dalam hal ini, kita bisa gunakan fungsi spesial, disebut dengan `setState()`, dimana akan mentrigger komponen untuk melakukan re-render ulang.

> Kita butuh `setState()` di nilai `this` pada komponen, dimana bagian dari class `React.Component` sebagai subclassing.

Dikomponnen `Clock` kita gunakan fungsi bawaan Javascript `setTimeout()` untuk melakukan update waktu ke objek `this.state` setiap 1000 milisecond. Kita akan tempatkan sebagai function, yang dapat kita gunakan kapan saja.

```javascript
class Clock extends React.Component {
  consturctor(props) {
    super(props);
    this.state = this.getTime();
  }
  componentDidMount() {
    this.setTimer();
  }

  setTimer() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock() {
    this.setState(this.getTime, this.setTimer);
  }
}
```

> Untuk perubahan waktu secara cepat setelah komponen dirender, kita gunakan `this.setTimer()` didalam komponen React sebagai lifecycle method, yaitu `componentDidMount()`. Kita akan perdalam, tentang lifecycle hooks, diselanjutnya.

Dalam Fungsi `updateClock()` kita akan update setiap state dengan waktu yang baru. Komponen tersebut akan ter-set dihalaman dan akan berubah setiap waktu (mendekati 1000 milisconds).

```javascript
class Clock extends React.Component {
  // ...
  updateClock() {
    this.setState(this.getTime, this.setTimer);
  }
  // ...
}
```

Sekarang komponen itu sendiri mungkin merender ulang lebih lama, saat pemanggilan fungsi tersebut, dimana terjadi semacam bootleneck dan menguras baterai jika diakses melalui smartphone. Ketimbang memanggil fungsi `setTimer()` setelah memanggil `this.setState()`, kita bisa tambahkan argumen kedua di fungsi `this.setState()`, dimana akan memastikan bahwa fungsi berjalan setelah ada update.

```javascript
class Clock extends React.Component {
  // ...
  updateClock() {
    const currentTime = new Date();
    this.setState(
      {
        currentTime: currentTime
      },
      this.setTimer
    );
  }
  // ...
}
```

Berikut ini full source code komponen `Clock`:

```jsx live
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getTime();
  }

  componentDidMount() {
    this.setTimer();
  }

  setTimer() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock() {
    this.setState(this.getTime, this.setTimer);
  }
  getTime() {
    const currentTime = new Date();
    return {
      jam: currentTime.getHours(),
      menit: currentTime.getMinutes(),
      detik: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? "pm" : "am"
    };
  }
  render() {
    const { jam, menit, detik, ampm } = this.state;
    return (
      <div className="clock">
        {jam == 0 ? 12 : jam > 12 ? jam - 12 : jam}:
        {menit > 9 ? menit : `0${menit}`}:{detik > 9 ? detik : `0${detik}`}{" "}
        {ampm}
      </div>
    );
  }
}
```

:::info **Stayles**
Kita tidak fokus belajar dengan CSS. kita tidak akan bahas!. Bagaimanapun, jika ingin mirip seperti kami buat, silahkan gunakan css yang kami berikan:

```javascript
<link
  href="https://cdn.jsdelivr.net/gh/fullstackreact/30-days-of-react@master/day-06/public/Clock.css"
  rel="stylesheet"
  type="text/css"
/>
```

:::

### Hal Yang Harus Diperhatikan

- Ketika memanggil `this.setState()` harus sebuah objek, hal itu untuk performa penggabungan data terhadap objek yang tersedia, lalu akan merender ulang.
- Secara umum, kita gunakan fungsi `render()` untuk menjaga agar nilai state tetap. Misal kita taro `jam`, `menit` dan `detik` difungsi `render`, ide yang kurang baik, karena akan membuang memory CPU secara sia-sia.

sebagaimana kita jelaskan dibahasa ini, penggunaan `props` jika diperlukan saja, karena alasan performa, tapi juga karena komponen `stateful` sulit untuk dilakukan pengetesan.

Hari ini, kita sudah ubah komponen menjadi `stateful` dan kita bisa gunakan untuk jika memang diperlukan. Selanjutnya, kita akan bahas lifecycle dari komponen kapan atau bagaimana berinteraksi dengan halaman web kita.
