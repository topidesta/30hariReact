---
id: hari4
title: Hari Keempat (Komponen Kompleks)
sidebar_label: Hari 04
---

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
{children}
</span>
);

## Komponen Kompleks

Keren, kita sudah buat komponen pertama. Sekarang kita akan buat lebih menarik dan mulai membangun tampilan yang kompleks. Dalam pelajaran sebelumnya, kita sudah buat komponen pertama, dan pada pelajaran kali ini, kita akan lanjutkan dengan komponen `App` dan UI (user interface) yang kompleks.

Sebuah web pada umumnya, mungkin mudah terlihatnya. Sebagai contoh, kita mungkin punya aplikasi yang menampilkan sebuah cerita yang terjadi di aplikasi Facebook dan Twitter.

### CSS

> Sekedar info, kita tidak fokus di CSS dalam pembelajaran kali ini, kita tidak akan bahas CSS secara spesifik dalam membangun sebuah cerita seperti dilayar. Bagaimanapun, kita akan bangun semirip mungkin. Jika anda mengikutsertakan file CSS sebagai tag `<link />` di kode anda, mungkin akan terlihat sama dengan style yang kita pakai:
>
> ```css
> <link
>   href="https://rawcdn.githack.com/fullstackreact/30-days-of-react/204f0bcc31a795771e75cec956710828a0fd1f74/day-04/public/Timeline.css"
>  rel="stylesheet"
>  type="text/css"
> />
> ```
>
> dan pastikan kode dalam komponen demo sama dengan yang tersedia, cek dihalaman ini: https://jsfiddle.net/auser/zwomnfwk/ untuk contoh.
>
> Semua kode CSS ada dihalaman ini: https://github.com/fullstackreact/30-days-of-react/blob/master/day-04/public/Timeline.css

Kita akan buat 1 komponen UI. Bagaimanapun, membangun aplikasi dalam 1 komponen itu sangat tidak bagus, akan kompleks dan sulit untuk diujicoba.

```jsx live
class Timeline extends React.Component {
  render() {
    return (
      <div class="demo">
        <div className="notificationsFrame">
          <div className="panel">
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
            <div className="content">
              <div className="line"></div>
              <div className="item">
                <div className="avatar">
                  <img
                    alt="doug"
                    src="http://www.croop.cl/UI/twitter/images/doug.jpg"
                  />
                </div>

                <span className="time">An hour ago</span>
                <p>Ate lunch</p>
              </div>

              <div className="item">
                <div className="avatar">
                  <img
                    alt="doug"
                    src="http://www.croop.cl/UI/twitter/images/doug.jpg"
                  />
                </div>

                <span className="time">10 am</span>
                <p>Read Day two article</p>
              </div>

              <div className="item">
                <div className="avatar">
                  <img
                    alt="doug"
                    src="http://www.croop.cl/UI/twitter/images/doug.jpg"
                  />
                </div>

                <span className="time">10 am</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>

              <div className="item">
                <div className="avatar">
                  <img
                    alt="doug"
                    src="http://www.croop.cl/UI/twitter/images/doug.jpg"
                  />
                </div>

                <span className="time">2:21 pm</span>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
```

## Penjelasan

Ketimbang membuat dalam 1 komponen, kita pecah menjadi beberapa komponen. Melihat dari contoh diaatas, bisa kita pisahkan menjadi 2 bagian komponen besar, diantaranya:

1. <Highlight color="#f40000">Judul</Highlight>
2. <Highlight color="#f2f417">Isi</Highlight>

![Timeline Pertama](/img/timeline1.png)

kitapun masih bisa membagi isi menjadi 3 bagian lainnya.

![Timeline Pertama](/img/timeline2.png)

> Jika kita ingin lebih cepat, kita akan pecah juga judul menjadi 3 bagian, tombol menu, tulisan judul, dan tombol pencarian, kita bisa kerjakan itu, jika kita mau.
> Penentuan dalam memecah setiap komponen tidak lebih seperti seni ketimbang pengetahuan atau kemampun dalam pengembangan aplikasi.

Dalam beberapa kasus, penting dalam memulai untuk setiap aplikasi dimulai dari berbagai komponen. Dengan memecah `app` kebeberapa komponen memudahkan untuk ujicoba dan memantau kegunaan komponen tersebut.

## Komponen Kontainer

Untuk membangun app notifikasi, kita akan bangun sebuah kontainer yang menampung app. Kontainer kita itu mudah, yang dapat menampung 2 komponen sekaligus.

Tidak semua komponen membutuhkan fungsi khusus (belum saatnya), jadi mungkin akan terlihat seperti komponen `Hello World` dengan 1 kali render.

Baiklah, kita buat komponen `App`, seperti dibawah ini:

```javascript
class App extends React.Component {
  render() {
    return (
      <div className="demo">
        <div className="notificationsFrame">
          <div className="panel">{/* isi disini */}</div>
        </div>
      </div>
    );
  }
}
```

> :::note Catat!
> Harap diingat, kita menggunakan tag `className` dalam React ketimbang `class` dari HTML, karena kita tidak menuliskan DOM secara langsung maupun HTML, melainkan JSX. Selain itu `class` adalah kata yang tidak boleh dipake lagi di Javascript.
> :::

## Komponen Child

Ketika komponen dibutuhkan didalam komponen lainnya, itulah dinamakan komponen `child`. Sebuah komponen bisa saja mempunyai banyak komponen lainnya. Sebuah komponen yang memanfaatkan komponen `child` biasa disebut komponen `parrent`.

Dengan komponen yang sudah didefinisikan, kita dapat komponen `judul` dan `isi`, pada dasarnya, memecah design utama kita ke beberapa bagian komponen.

Sebagai contoh, komponen `header`, dengan elementya `<div className="header">`, ikon menu, judul, dan pencarian.

```jsx live
class Judul extends React.Component {
  render() {
    return (
      <div className="demo">
        <div className="notificationsFrame">
          <div className="panel">
            <div className="header">
              <div className="menuIcon">
                <div className="dashTop"></div>
                <div className="dashBottom"></div>
                <div className="circle"></div>
              </div>
              <span className="title">TimeLine</span>
              <input
                type="text"
                className="searchInput"
                placeholder="Search... "
              />
              <div className="fa fa-search searchIcon"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
```

dan terakhir, kita akan membuat komponen `isi` dengan item timeline. Setiap timeline dibungkus dalam 1 komponen, terdiri dari avatar, waktu dan kalimat singkat.

```jsx live
class Isi extends React.Component {
  render() {
    return (
      <div className="demo">
        <div className="notificationsFrame">
          <div className="content">
            <div className="line"></div>
            {/* item timeline */}
            <div className="item">
              <div className="avatar">
                <img
                  alt="Doug"
                  src="http://www.croop.cl/UI/twitter/images/doug.jpg"
                />{" "}
                Doug
              </div>
              <span className="time">An hour ago</span>
              <p>Ate Lunch</p>
              <div className="commentCount">2</div>
            </div>
            {/* .... */}
          </div>
        </div>
      </div>
    );
  }
}
```

> :::caution Perhatian
> Untuk menulis komentar di komponen React kita gunakan bracket sebagi multi-line komentar di javascript.
> Tidak seperti komentar HTML, seperti dibawah ini:
>
> ```html
> <!-- INI KOMENTAR HTML -->
> ```
>
> di React, sebuah komponen ditutup dengan bracket:
>
> ```javascript
> {
>   /* INI KOMENTAR DI REACT */
> }
> ```
>
> :::

## Gabungkan Semua

Sekarang kita akan gabungkan 2 komponen `child`, yaitu `Judul` dan `Isi`, merupakan komponen child bagian dari komponen `App`. Kurang lebih akan menjadi seperti dibawah ini:

> TODO: JSX FILE STYLE.

```javascript
class App extends React.Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header />
          <Content />
        </div>
      </div>
    );
  }
}
```

Selesai, selanjutnya kita akan buat sebuah komponen lebih dinamis dan menjadi pengolah data dengan React.
