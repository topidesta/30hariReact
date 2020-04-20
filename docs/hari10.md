---
id: hari10
title: Hari Kesupuluh - Interactivity
sidebar_label: Hari 10 - Interactivity
---

> Hari ini kita akan menambahkan aktifitas diaplikasi agar terlihat menarik dan dinamis.

Sampai hari ini, kita sudah bangun komponen tanpa menambahan interaksi pengguna, sekarang kita akan ubah.

## Interaksi Pengguna

Sebuah browser adalah aplikasi event-driven. Semua yang pengguna lakukan akan dikerjakan browser saat itu, dari mengklik tombol sanpai menggeser sebuah mouse. Dalam JavaScript, kita bisa listen sebuah event untuk beberapa event dan menambahkan fungsi javascript agar berinteraksi.

Sebagai contoh, kita bisa menambahkan fungsi ke event browser seperti `mousemove` disebuah JS.

```javascript
const ele = document.getElementById('mousemove');
ele.innerHTML = 'Move your mouse over this text';
ele.addEventListener('mousemove', function(evt) {
    const { screenX, screenY } = evt;
    ele.innerHTML = '<div>Mouse is at: X:' + screenX + ', Y: ' + screenY + '</div>';
})
```

Dalam react, bagaimanapun kita tidak berinteraksi langsung dengan event pengulangan browser oleh JavaScript sebagai React penyedia jalan untuk melakukan event dengan `props`.

Sebagai contoh, untuk memastikan sebuah event dari `mousemove` dari contoh dengan React, kita akan men-setting prop `onMouseMove` (harap perhatikan camel-case dalam penamaan event).

```jsx live
class MouseMover extends React.Component {
    state = {
        x: 0, y:0
    }

    handleMouseMove = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    render(){
        return(
            <div onMouseMove={this.handleMouseMove}>
                {this.state.x || this.state.y
                    ? "Posisi mouse ada Pada x: " + this.state.x + ", y: " + this.state.y 
                    : "Pindahakan/ gerakan mouse dalam box ini"}
            </div>
        )
    }
}
```

React menyediakan banyak `props` yang bisa kita gunakan dengan browser berbeda, seperti click, touch, drag, scroll, selecton event dan banyak lagi, silahkan lihat [events](https://facebook.github.io/react/docs/events.html) didokumentasi resmi.

Untuk melihat beberapa aksi, ikuti beberapa demo kecil terkait `props`, kita bisa gunakan element yang ada. Setiap element text berikut merupakan set dari daftar prop. Untuk mencobanya, dan melihat bagaimana sebuah event dipanggil dan dikendalikan disebuah element.

Kita akan gunakan prop `onClick` disetiap aplikasi kita, tolong biasakan ya agar lebih terdengar familiar. Di aktifitas list header kita punya icon pencarian, yang belom kita hooked, untuk kotak pencarian.

Interaksi yang kita inginkan adalah menampilkan sebuah `<input />` pencarian ketika user melakukan klik pada icon pencarian. Tulisah ulang kembali komponen `Judul`, seperti berikut ini:

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
Kita akan update sedikit, agara bisa melewatkan prop `classnae` secara dinamis ke element `<input />`.

```jsx live
class Judul extends React.Component {
  render() {

    let searchInputClasses = ["searchInput"];
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
                className={searchInputClasses.join('')}
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

Ketika pengguna meng-klik di element `<div className="fa fa-search searchIcon"></div>` kita ingin menjalan sebuah fungsi untuk melakukan perubahan state pada komponen, jadi objek `searchInputClassess` akan ada perubahan. Dengan handler `onClick`, ini sangat mudah.

Kita akan ubah komponen menjadi stateful. kita akan ubah komponen kita dengan fungsi `constructor()`:

```javascript
class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchVisible: false
        }
    }
}
```

:::info
## Apa itu fungsi `constructor`?

Dalam JavaScript, fungsi `constructor` adalah fungsi yang jalan ketika objek dibuat. Nilainya mengembalikan sebuah fungsi Objek yang sudah dibuat `prototype` secara instance.
Dalam bahasa mudahnya, sebuah fungsi konstruktor yang menjalankan runtime Javascript dengan membuat objek baru. Kita akan gunakan methode konstruktor untuk men-setting variabel secara instan disebuah objek sebagai mestinya ketika objek telah dibuat.
Ketika menggunakan syntax `ES6` dalam menulis objek, kita akan memanggil method `super()` sebelum method lainnya. Memanggil fungsi `super()` maka memanggil fungsi class `constructor()` juga. Kita akan panggil dengan argumen yang dipanggil di class kita juga.
:::

Ketika pengguna menekan tombol klik, kita ingin perubahan terhadap state dan merubah tanda di `searchVisible`. Sejak kita menginginkan pengguna untuk close/ hide sebuah fild `<input />` setelah meng-klik icon pencarian untuk beberapa detik, kita toggle sebuah state ketimbang men-setting menjadi 'true'.

Kita akan buat method binding ketika event di klik:

```javascript
class Header extends React.Component {
    // ...
    showSearch() {
        this.setState({
            searchVisible: !this.state.searchVisible
        })
    }
}
```

kita tambahakan statement if untuk merubah  `searchInputClasses` jika bernilai 'true' dengan `this.state.searchVisible`.

```javascript
class Header extends React.Component {
    // ...
    render() {
        // ...
        // Update class aray jika state tersedia
        if (this.state.searchVisible) {
            searchInputClasses.push("active");
        }
    }
}
```

Akhirnya kita bisa tambahkan handle `click` dengan prop `onClick` dielement icon untuk memanggil method baru kita `showSearch()`. berikut ini hasil akhir dari komponen `Judul`:

```jsx live
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVisible: false
        }
    }

    showSearch() {
        this.setState({
            searchVisible: !this.state.searchVisible
        })
    }

    render() {
        let searchInputClasses = ["searchInput"];

        // update sebuah array class jika state tersedia
        if (this.state.searchVisible) {
            searchInputClasses.push("active");
        }

        return(

            <div className="demo">
        <div className="notificationsFrame">
          <div className="panel">
            <div className="header">
                <div className="menuIcon">
                    <div className="dashTop"></div>
                    <div className="dashBottom"></div>
                    <div className="circle"></div>
                </div>

                <span className="title">
                    {this.props.title}
                </span>

                <input
                type="text"
                className={searchInputClasses.join(' ')}
                placeholder="Search ..." />

                { /* Menambahkan hanlder onClick untuk memanggi tombol showSearch */}

                <div 
                    onClick={this.showSearch.bind(this)}
                    className="fa fa-search searchIcon">
                </div>

            </div>
          </div>
        </div>
      </div>
        );
    }
}
```

## Input Events

Kapanpun kita membangun sebuah form di React, kita akan menggunakan input event yang sudah disediakan oleh React, tidak semuanya, kita akan gunakan `onSubmit()` dan `onChange()` lebih sering.

Kita akan update box pencarian yang akan menampilkan text ketika ada perubahan. Kapanpun sebuah `<input />` memiliki set prop `onChange()`, kita akan panggil fungsi setiap waktu saat ada perubahan. Ketika kita klik dan mulai mengetik sebuah fungsi akan terpanggil.

Dengan sebuah prop, kita bisa mencatat nilai dari state.

Ketimbang harus merubah komponen `<Judul />`, kita akan buat sebuah komponen child yang terdiri dari element `<form />`. Dengan merubah haluan menjadi pengatur form, kita akan menyederhanakan sebuah `<Header />` dan memanggil parent sebuah header ketika pengguna melakukan submit form (pola di React secara umum).

Kita akan buat sebuah komponen `searchForm`. Komponen baru ini adalah stateful sebagaimana agara nilai dari pencarian dapat dipantau.

```javascript
class SearchForm extends React.Component {
    // ...
    constructor(props){
        super(props);

        this.state = {
            searchText: ''
        }
    }
}
```

Sekarang kita sudah siap sebuah form dalam HTML yang sudah kita tuliskan dikomponen `<Judul />`

## Pencarian
