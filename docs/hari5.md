---
id: hari5
title: Hari Kelima
sidebar_label: Hari 05 - Data Driven
---

## Data Driven

> :::note Catatan!
> Menuliskan data dalam baris kode itu sangat tidak baik. Hari ini, kita akan merubah komponen yang dapat mengaksess data dari luar

Dari Poin ini, kita sudah tuliskan komponen kita dan saling berhubung antar komponen `parent` atau `child`. Bagaimanapun, kita belum mencoba data dikomponen React, meski tergantung kebutuhan (menurut kami) didalam website dengan React, kita masih belum mengambil kekuatan React dalam menampilkan data.

Baiklah, kita mulai sekarang.

## Mencoba data-driven

Cek ulang, kemarin kita sudah buat dari awal komponen timeline, didalamnya terdapat sebuah komponen judul dan isi (aktivitas), cek dihalaman [https://github.com/topidesta/30hariCode](https://github.com/topidesta/30hariCode)

Kita membagi beberapa bagian komponen, yang terdiri dari 3 komponen bagian yang berbeda, dengan template JSX statis. Sangat tidak nyaman setiap ada update di template komponen, untuk perubahan data diwebsite kita.

Baiklah, kita mulai menampilkan data. Kita mulai dari komponen `<Judul />`. Komponen tersebut hanya menampilkan judul dari element `Timeline`. Sangat bagus, jika kita gunakan kembali bagian bagian komponen dihalaman lainnya, tapi tidak begitu berpengaruh untuk judul `Timeline` dalam penggunaannya.

Baiklah, katakan kita sudah siap untuk menambahkan `judul` ke React atau semacamnya.

## Pengenalan Props

React menginjinkan kita mengirim data ke komponen layaknya sebuah sintak HTML, menggunakan attribute atau properties dalam komponen. Ini sama seperti menampilkan gambar dengan memanfaatkan tag `src`. Kita berfikir tentang property tag `<img />` sebagai `prop` yang sudah kita buat dikomponen, kita sebut `img`.

Kita dapat akses properties dalam sebuah komponen dengan `this.props`. Baiklah, waktunya kitacoba.

Tulis ulang kembali komponen `judul`:

```jsx live
class Judul extends React.Component {
  render() {
    return (
      <div className="demo">
        <div className="notificationsFrame">
          <div className="header">
            <div className="menuIcon">
              <div className="dashTop"></div>
              <div className="dashBottom"></div>
              <div className="circle"></div>
            </div>
            <span className="title">Timeline</span>

            <input
              type="text"
              className="searchInput"
              placeholder="Search ..."
            />

            <div className="fa fa-search searchIcon"></div>
          </div>
        </div>
      </div>
    );
  }
}
```

Ketika kita gunakan bernama komponen `<Judul />`, kita simpan di komponen `<App />`, seperti ini:

```javascript
<Judul />
```

Kita bisa tambahkan attribute `title` sebagai prop di komponen `<Judul />`, dengan attributenya kurang lebih seperti ini:

```javascript
<Judul title="Timeline" />
```

Dalam komponen kita, kita dapat akses propertis `title` dari class `Judul` dengan `this.props`. Dibanding kita harus set secara manual di template, kita dapat gunapakan propertis untuk menghandlenya.

```javascript
class Judul extends React.Component {
  render() {
    return (
      <div className="demo">
        <div className="notificationsFrame">
          <div className="header">
            <div className="menuIcon">
              <div className="dashTop"></div>
              <div className="dashBottom"></div>
              <div className="circle"></div>
            </div>
            <span className="title">{this.props.title}</span>

            <input
              type="text"
              className="searchInput"
              placeholder="Search ..."
            />

            <div className="fa fa-search searchIcon"></div>
          </div>
        </div>
      </div>
    );
  }
}
```

> :::info Berikut ini source dari git: https://github.com/topidesta/30hariCode/commit/6aece32cc1e1d1ed1e5ba423744e5d5d319d7604
> Kita juga bisa tambahkan komponen `<Judul />` yang akan menampilkan string sebagai `title` ketika komponen dipanggil, cukup dengan menuliskannya sebanyak 4x, seperti dibawah ini:

```javascript
<Judul title="Timeline" />
<Judul title="Profile" />
<Judul title="Settings" />
<Judul title="Chat" />
```

maka, akan muncul 4 menu tambahan, kurang lebih seperti dibawah ini:

![4 Menu](/img/4menu.png)

> :::info ini link livenya: https://5e7c524149d2df0008131180--30haricode.netlify.com/
> :::

Nah, mudahbukan? sekarang kita dapat menggunakan berulang-ulang komponen `<Judul />` dengan propertis `title` yang dinamis.

Kita dapat menambahkan tidak hanya sebuah string di komponen. Kita dapat tambahkan nomor, string, objek dan fungsi pun bisa. Kita sedang membicarakan definisi lain dari prorperties, selanjutnya kita akan buat komponen API.

Ketimbang mengatur isi dan tanggal secara manual, kita bisa gunakan komponen `isi` dengan variable data ketimbang dengan text manual. Sama seperti kita lakukan dengan komponen HTML, kita dapat lewati banyak properties ke sebuah komponen.

Kemarin kita sudah buat komponen `isi` kurang lebih seperti ini:

```javascript
class Isi extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="line"></div>

        {/* Timeline item */}
        <div className="item">
          <div className="avatar">
            <img src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
            Doug
          </div>

          <span className="time">An hour ago</span>
          <p>Ate lunch</p>
          <div className="commentCount">2</div>
        </div>

        {/* ... */}
      </div>
    );
  }
}
```

sama seperti `title` sebelumnya, mari kita lihat `props` di komponen isi yang dibutuhkan, diantarnya:

- Gambar avatar pengguna
- Aktifitas Waktu
- Text dari item aktifitas
- Jumlah komentar

Anggap saja, kita punya data berupa object Javascript yang menggambarkan isi aktivitas. Kita punya beberapa field, seperti string (text) dan objek waktu. Kita mungkin butuh beberapa turunan lainnya seperti `komentar` dan `pengguna`, seperti berikut:

```javascript
{
    timestamp: new Date().getTime(),
    text: "Ate Lunch",
    pengguna: {
        id: 1,
        nama: 'Nate',
        Avatar: 'http://www.croop.cl/UI/twitter/images/doug.jpg'
    },
    komentar: [
        { from: 'Ari', text: 'Me too!' }
    ]
}
```

Sekarang kita buat sebuah objek yang terdiri dari berbagai aktifitas, seperti dibawah ini:

```javascript
const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    pengguna: {
      id: 1,
      nama: "Nate",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    komentar: [{ from: "Ari", text: "Me too!" }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    pengguna: {
      id: 2,
      nama: "Ari",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    komentar: [{ from: "Nate", text: "I am so jealous" }]
  }
];
```

Tambahkan di komponen `<Isi />` dalam 1 baris:

```javascript
<Content activities={activities} />
```

> Simpan Object di Komponen `App` ya, atau cek disourcecode berikut ini: https://github.com/topidesta/30hariCode/commit/f94c69b833ee7be3b36306a7518761085610136c

Coba direfresh, tidak akan muncul, kita perlu update komponen `Isi` terlebih dahulu untuk menerima banyak data, sebagaimana kita pelajari sebelumnya, JSX hanya sekedar JavaScript yang dieksekusi oleh browser. Kita akan eksekusi didalam konten JSX.

Baiklah, kita gunakan fungsi `map` dari Javascript, untuk memecah setiap itemnyah, kurang lebih seperti dibawah ini:

```javascript
class Isi extends React.Component {
  render() {
    const { activities } = this.props; // ES6 destructuring

    return (
      <div className="content">
        <div className="line"></div>

        {/* Timeline item */}
        {activities.map(activity => {
          return (
            <div className="item">
              <div className="avatar">
                <img alt={activity.text} src={activity.pengguna.avatar} />
                {activity.pengguna.nama}
              </div>

              <span className="time">{activity.timestamp}</span>
              <p>{activity.text}</p>
              <div className="commentCount">{activity.komentar.length}</div>
            </div>
          );
        })}

        {/* ... */}
      </div>
    );
  }
}
```

![Timeline 3](/img/timeline3.png)

> Berikut ini preview live di netlify: https://5e7c6e892de05200080c9a41--30haricode.netlify.com/ atau jika ingin melihat sourcecode github: https://github.com/topidesta/30hariCode/commit/04cf33642fa2e31728e1767375a57448a64de1db#diff-16f661b3c05bfec7014e09a54aaee062

Sekarang kita bisa lihat array dalam bentuk aktifitas dan kompoen `isi` yang akan mengaturnya. bagaimanapun kita bisa menambahkan berapapun array, lalu kita hubungkan dengan komponen lebih kompleks, antara isi dan daftar aktifitas.

## ItemAktifitas
