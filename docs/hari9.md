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

## Inline Styles

## Styling Libraris
