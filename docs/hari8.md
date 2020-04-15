---
id: hari8
title: Hari Kedelapan - PropTypes
sidebar_label: Hari 08 - PropTypes
---

Kita melihat bagaimana pemanfaatan ulang komponen React hari ini, jadi kita bisa saling membagi komponen antara aplikasi dan antara tim.

Wow, kita sudah masuk pekan kedua, secara point, kita akan membicarakan lebih banyak dasar dari fiture React (`props`, `state`, siklus hidup, `hooks`, JSX, dan lainnya).

Dalam seksi kali ni, kita akan melihat sedikit membubuhi dan mempaket komponen kita.

## PropTypes

Mungkin anda sudah menandakan kita sudah menggunakan `props` di beberapa komponen. Untuk keseluruhan bagian, kita mengharapkan merupakan bagian atau set dari types (alias `objek` atau sebuah `string`). React menghadirkan sebuah methode yang mendefinisikan dan validasi types yang mengijinkan kita mudah untuk mengekpose API komponen.

Tidak hanya bagus untuk latihan pemanfaatan sebuah dokumentasi, hal itu juga bagus untuk membangun [sebuah komponen react yang terpakai kembali](https://reactjs.org/docs/components-and-props.html).

Sebuah objek `prop-types` dapat mengexport ribuan dengan types yang berbeda, dimana kita gunakan untuk mendefinisikan sebuah type dikomponen yang seharusnya. Kita dapat definisikan methode `propTypes` dengan style ES6 class prop React:

```javascript
class Clock extends React.Component {
  // ....
}

Clock.propTypes = {
  // key
  // value
};
```

Dari sebuah `prop` kita bisa mendefinisikan sebuah objek, dimana memiliki kunci sebuah prop sebagai nama dari prop yang sudah didefinisikan dan sebuah nilai yang terdefinisi, sebagaimana mestinya.

Sebagai contoh, komponen `Header` kita bangun beberapa hari lalu, yang dapat menerima sebuah prop dengan nama `title` dan kita harapakan itu sebuah string. Kita definisikan menjadi string, seperti berikut:

> Pertama, kita perlu `import` sebuah objek `propTypes` dari paket `prop-types` menggunakan keyword `import`.
> `javascript import PropTypes from 'prop-types'`
> Kita juga bisa langsung tembah objek `PropTypes` dibrowser secara langsung, dengan menambahkan tag `script`.
> `<script src="https://unpkg.com/prop-types@15.6/prop-types.min.js"></script>`

```javascript
import PropTypes from "prop-types";
class Header extends React.Component {
  // ....
}
Header.propTypes = {
  title: PropTypes.string
};
```

Ada banyak types, dalam mengexport objek `PropTypes` dan mengijinkan untuk kita mengcustom sebuah tipe objek. Kita akan lihat secara umum dari types yang tersedia:

### _Basic_ Types

React mengeluarkan beberapa types dasar, yang bisa kita gunakan:

| Type     |                      Contoh                      |              Class |
| -------- | :----------------------------------------------: | -----------------: |
| String   |                     'hello'                      | `PropTypes.string` |
| Number   |                     10, 0.1                      | `PropTypes.number` |
| Boolean  |                   true/ false                    |   `PropTypes.bool` |
| Function | const say => (msg) => console.log("hello world") |   `PropTypes.func` |
| Symbol   |                  Symbol("msg")                   | `PropTypes.symbol` |
| Object   |                 {name: 'Desta'}                  | `PropTypes.object` |
| Anything |                  'apapun',10,{}                  |                 {} |

Hal itu sangat mungkin untuk memberitahu React yang dapat memberikan apapun untuk dirender oleh `PropTypes.node`:

```javascript
Clock.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  isOn: PropTypes.bool,
  onDisplay: PropTypes.func,
  symbol: PropTypes.symbol,
  user: PropTypes.object,

  name: PropTypes.node
};
```

Kita sudah lihat, bagaimana berkomunikasi antara komponen parent dengan child, menggunakan `props`. Kita dapat berkomunikasi dari sebuah komponen child ke komponen parent menggunakan function. Kita sudah diskusikan pola ini ketika kita ingin manipulasi komponen dari child.

### _Collection_ Types

Kita bisa menggunakan beragam _collection_ di `props` kita. Kita sudah melihat sebelumnya kita dapat melakukannya ketika sebuah array di aktifitas. Untuk mendeklarasiakn sebuah komponen menjadi array, bisa kita gunakan tanda `PropTypes.array`.

Kita juga membutuhkan sebuah array yang dapat menampung sebuah objek dari type yang digunakan, menggunakan `PropTypes.arrayOf([])`.

| type             |     contoh     |                       class |
| ---------------- | :------------: | --------------------------: |
| array            |       []       |           `PropTypes.array` |
| array of numbers |    [1,2,3]     | `PropTypes.arrayOf([type])` |
| enum             | ['Red','Blue'] |    `PropTypes.oneOf([arr])` |

Sangat mungkin untuk menjelaskan sebuah objek memiliki salah satu atau beberapa types yang berbeda sebagimana kita bisa gunakan dengan `PropTypes.oneOfType([types])`.

```javascript
Clock.propTypes = {
  counts: PropTypes.array,
  users: PropTypes.arrayOf(PropTypes.object),
  alarmColor: PropTypes.oneOf(["red", "blue"]),
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Title)
  ])
};
```

### _Object_ Types

Sangat mungkin untuk mendefinisikan sebuah types yang dibutuhkan dalam bentuk atau contoh class tertentu.

| type          |    contoh     |                  class |
| ------------- | :-----------: | ---------------------: |
| Object        | {name: 'Ari'} |     `PropTypes.object` |
| Number object |  {count: 42}  | `PropTypes.objectOf()` |
| Instance      | new Message() | `PropTypes.objectOf()` |
| Object Shape  | {name: 'Ari'} |    `PropTypes.shape()` |

```javascript
Clock.propTypes = {
  basicObject: PropTypes.object,
  numbers: PropTypes.objectOf(PropTypes.numbers),
  message: PropTypes.instanceOf(Message),
  contactList: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string
  })
};
```

### _React_ Types

Kita juga bisa melewatkan element React dari Parent ke Child. Ini bener benar sangat berguna saat membangun template dan membutuhkan kostum dengan template.

| type    |   contoh    |               class |
| ------- | :---------: | ------------------: |
| Element | `<Title />` | `PropTypes.element` |

```javascript
Clock.propTypes = {
  displayEle: PropTypes.element
};
```

Jika gunakan element, React tidak akan mengijinkan untuk komponen child yang jomblo. Itulah kita tidak bisa melewati dengan banyak element.

```javascript
// element yang salah
<Clock displayElement={
    <div>Name</div>
    <div>Age</div>
}
></Clock>

// element yang benar
<Clock displayElement={
    <div>
        <div>Name</div>
        <div>Age</div>
    </div>
}></Clock>
```

### _Requiring_ Types

Itu memungkinkan sebuah prop ditempatkan di komponen dengan menambahkan deskripsi dengan `.isRequired`:

```javascript
Clock.propTypes = {
  title: PropTypes.name.isRequired
};
```

setting `prop` sangat dibutuhkan ketika setiap kali kita ingin `prop` dilewati dengan komponen parent dan tidak dapat dilakukan.

### _Custom_ Types

Akhirnya, sangat mungkin kita melewati sebuah fungsi didefinisikan secara kostum. Kita dapat lakukan pada props single atau validasi array. Hal yang dibutuhkan untuk kostum fungsi yaitu jika validasi tidak cocok, yang akan muncul objek `error`:

| type        |        contoh        |                                                             class |
| ----------- | :------------------: | ----------------------------------------------------------------: |
| custom      |  'something_crazy'   |                     `function(props, propName, componentName) {}` |
| customArray | ['something','crzy'] | `propTypes.arrayOf(function(props, propName, componentName) {} )` |

```javascript
UserLink.propTypes = {
  userWithName: (props, propName, componentName) => {
    if (!props[propName] || !props[propName].name) {
      return new Error(
        "Invalid " + propName + " : No name property defined for component"
      );
    }
  }
};
```

## Props Standard

Terkadang kita ingin mensetting nilai default sebuah prop. Contoh komponen `<Header />`, kita buat beberapa hari lalu mungkin tidak membutuhkan sebuah judul, jika iya, kita tidak perlu merender, jadi kita bisa mendefinisikan judul secara umum ketimbang harus merubah nilai prop default.

Untuk mengeset default prop, kita bisa gunakan kunci objek dari `defaultProps` dikomponen:

```javascript
Header.defaultProps = {
  title: "Github Activity"
};
```

huh, hari ini kita harus sering lihat dokumentasi resmi. Hal itu sangat berguna jika kita ingin komponen kita saling berguna, menggunakan attribute komponen `propTypes` dan `defaultProps`. Tidak hanya memudahkan komunikasi antar develooper, tetapi memudahkan sebuah komponen kita terbaca, jika suatu hari kita tinggal sebentar.

Selanjutnya, kita akan koding ria lagi, dan menintegrasikan style di komponen kita.
