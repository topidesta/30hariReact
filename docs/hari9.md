---
id: hari9
title: Hari Kesembilan - Styles
sidebar_label: Hari 09 - Styles
---

Tidak ada aplikasi tanpa style. Kita akan melihat perbedaan methode yang dapat kita implentasikan dikomponen, dari CSS tradisional hingga _inline_ style.

Sampai titik ini, kita belum menambahkan style dikomponen kita, disamping menambahkan nama _class names_ css ke komponen. Hari ini kita akan menghabiskan waktu dalam beberapa hari untuk menambahkan style di komponen React, agar terlihat bagus, pertahankan semangat anda. Kita akan belajar dengan cara yang sedikit mudah dengan CSS.

Baiklah, ada beberapa cara untuk menambahkan style dikomponen kita.

1. Cascasing Stylesheet (CSS)
2. Inline Styles
3. Styling Libraries

## CSS

Menggunakan CSS style diaplikasi kita yang sudah familiar dan tidak ada yang baru. Jika belum membuat aplikasi web, maka anda akan banyak menyukai menulis dalam CSS. Intinya, CSS adalah cara menambahkan style ke sebuah komponen DOM diluar dari komponen itu sendiri.

Menggunakan CSS dalam react tidak seperti sebuah novel. Kita akan gunakan CSS direact layaknya kita gunakan CSS tanpa React. Kita samakan id/ class ke komponen dan menggunakan css selector, untuk element setiap halaman dan membiarkan browser mengatur sebuah stylenya.

Sebagai contoh, kita akan ubah komponen `Header` style yang sedikit perubahan.

```css
.demo .notificationsFrame .header {
  background: rgba(251, 202, 43, 1);
}
.demo .notificationsFrame .header .searchIcon,
.demo .notificationsFrame .header .title {
  color: #333333;
}

.demo .notificationsFrame .header .menuIcon .dashTop,
.demo .notificationsFrame .header .menuIcon .dashBottom,
.demo .notificationsFrame .header .menuIcon .circle {
  background-color: #333333;
}
```

Kita bisa gunakan class `.header` secara umum dalam css file. pastikan tag `<link />` sudah ditemple di `index.html` project anda, kita akan simpan script css itu dengan nama `styles.css` difolder yang sama dengan `index.html`, seperti berikut ini:

```html
<link rel="stylesheet" type="text/css" href="styles.css" />
```
satu hal yang merepotkan tentang CSS  yaitu sebuah cascading itu sendiri. Cara CSS bekejera yaitu _cascades_ dimana namanya mengacu pada style ke child. Terkadang menimbulkan banyak celah di class sendiri dimana terdapat nama yang sama, dan kadang merubah style untuk class yang tidak spesifik.

Contoh diatas, class namanya `.header` tidak terlalu spesifik. Tidak hanya halaman itu punya header, tapi bok konten seperti halaman artikel bahkan sebuah iklan terkadang punya nama class yaitu `.header`.

> ada 1 cara untuk mengatasinya, menggunakan [css modules](https://glenmaddern.com/articles/css-modules), setiap class CSS memiliki nama yang unik. Ini bukan sesuatu yang magic, hanya semacam tools yang mendefinisikan custom nama class di CSS untuk kita, denagn nama unik. Kita akan jelaskan selanjutnya.

React tidak begitu baru dalam mengenalkan method dalam masalah ini, dimana kita bisa mendefinisikan beragam style di dalam code di file jsx kita.

## Inline Styles

Menambahkan beragam style dikomponen aseli, tidak hanya mendefinisikan style didalam kompnen, tapi memudahkan kita mendefinisikan beragam style meski dengan berbeda states dalam aplikasi.

React memeberikan kemudahan dengan menggunakan Styles sebagai sebuah Objek Javascript ketimbang dipisahkandalam beberapa file. Baiklah kita ubah komponen `header` sekali lagi, dan dibanding menggunakan class css, kita akan menggunkan inline style.

Mendefinisikan sebuah style dalam komponen seperti menggunakan style prop dengan mudah. Semua DOM yang ada di element React akan dibaca sebagai propertis style. dimana sebuah objek dengan style ketikan camel-case, dan nilai yang sudah dimapping sebelumnya.

Sebagai contoh, kita menambahkan sebuah `color` style ke sebuah element `<div />` di file jsx, mungkin seperti dibawah ini:

```javascript
<div style={{ color: "blue" }}>This text will have the color blue</div>
```

> Harap dicatat, kita mendefinisikan sebuah style dalam bentuk 2 braces, kita jadikan sebuah objek dalam javascript didalam tag template, didalam sebuah objek JS dan diluar adalah tag template.
> Contoh lainnya agar lebih jelas,
> ```javascript
> render() {
>   const divStyle = { color: 'blue' }
>   return (
>     <div style={divStyle}>This text will have the color blue</div>
>   )
> }
> ```

dalam beberapa kasus, ada yang mendefinisikan style seperti JS, kita tidak bisa menggunakan style css yang lama, seperti `background-color` akan error di JavaScript. Danlagi, React membutuhkan style berupa camel-case.

:::info
[camelCase](https://en.wikipedia.org/wiki/CamelCase) ialah sebuah teknik menulis dengan menggunakan hurup besar disetiap kata kecuali dikata pertama, seperti `backgroundColor` dan `linearGradient`. 
:::

Untuk merubah komponen header, kita menggunakan style berdasarkan definisi class CSS, kita bisa tambahakan `className` prop sepanjang sesuai dengan prop `style`.

```javascript
class Header extends React.Component {
  render() {
    const wrapperStyle = {
      backgroundColor: "rgba(251, 202, 43, 1)"
    }

    const titleStyle = {
      color: "#11111"
    }

    const menuColor = {
      backgroundColor: "#111111"
    }

    return(
      <div style={wrapperStyle} className="header">
        <div className="menuIcon">
          <div className="dashTop" style={menuColor}></div>
          <div className="dashBottom" style={menuColor}></div>
          <div className="circle" style={menuColor}></div>
        </div>

        <span style={titleStyle} className="title">
          {this.props.title}
        </span>

        <input
          type="text"
          className="searchInput"
          placeholder="Search ..."
        />

        <div style={titleStyle} className="fa fa-search searchIcon"></div>

      </div>      
    )
  }
}
```

Header akan tetap berawarna orange.

## Styling Libraris

Komunitas React sangat bagus untuk tempat perubahan. Ada banyak libraris style yang bisa kita gunakan, dalam membangun sebuah style, seperti [Radium](https://formidable.com/open-source/radium/) dari Formidable Labs.

Hampir semua librari yang ada berdasarkan cara kerja yang sudah didefinisikan oleh developer React, agar bisa digunakan oleh React.

Radium memudahkan kita untuk mendefinisikan style umum diluar dari komponen React itu sendiri, semacam prefix otomatis, mendukung kueris media (seperti `:hover` dan `:active`), style inline dan banyak lagi.

Kita tidak akan menjelaskan secara dalam tentang radium, tapi mengetahuinya itu lebih baik agar kita bisa antisipasi dari awal, terutama ketika butuh meluaskan pemanfaatan inline style kedepannya.

Sekarang kita sudah tau komponen style kita, kita akan buat sesuau yang baru, yang terlihat tidak terlalu rumit. Diseksi selanjutnya kita akan menambahkan aktifitias user di komponen.