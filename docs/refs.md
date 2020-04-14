---
id: refs
title: Refs di Komponen React
sidebar_label: Refs di Komponen (Pengenalan)
---

:::info
https://www.newline.co/fullstack-react/articles/using-refs-in-react/
:::

Ketika menggunakan _React_, logika kita dikhususkan untuk **Jangan terlalu mudah merubah sebuah DOM**, tapi kita harus melewatkan di _props_ dan merender ulang komponennya. Tapi, terkadang ada situasi dimana hal itu tak diperlukan.

_Refs_ dalam _React_ dihadirkan untuk memberikan cara, bagaiamana mengakses element _React_ (atau node _DOM_) yang ditulis oleh methode `render()`.

Ketika komponen _parent_ membutuhkan interaksi dengan komponen child, biasnya kita gunakan [props](https://reactjs.org/docs/components-and-props.html). Bagaimanapun, kita akan ubah sebuah data child tanpa harus melakukan render ulang dengan props yang baru. Itu ketika refs dapat sebuah tanda.

## Kapan digunakan?

Rekomendasi kami, menggunakan refs bisa berdasarkan situasi:

- Integrasi dengan pihak ketiga terkait libraries DOM
- Trigger animasi yang penting
- Mengatur focus, seleksi text dan memutar media

Jadi kita sudah menentukan kapan kita bisa gunakan refs, bagaimana kita memanfaatkannya?

## Menggunakan Refs di React

Ada beberapa jalan, dimana kita bisa gunakan refs:

- `React.createRef()`
- Callback refs
- String refs (resmi)
- Forwaring refs

Kita aka pecah dalam beberapa bagian ya.

### React.createRef()

Refs dapan dibuat menggunakan fungsi `React.createRef()` dan menambahkan elemen HTML di komponen React melalui attribut `ref`.

Sebuah ref biasanya dibuat didalam konstruktor komponen, jadi secara singkat dapat digunakan oleh komponen. SEbagi contoh:

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.firstRef = React.createRef();
  }
  render() {
    return <div ref={this.firsRef} />;
  }
}
```

Seperti yang anda lihat:

- sebuah ref dibuat di konstruktor sebagai `this.firstRef`
- dan ditugaskan sebagai `ref` di `div` didalam fungsi `render()`. Lihat contoh diatas, bagaimana menggunakan refs didalam komponen React.

### Fokus sebuah Input Dengan Refs

Berikut contohnya:

```javascript
// Ref.js
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // focus input text secara eksplisit di api DOM
    // Catat: kita akses dom node yang 'berjalan'
    this.textInput.current.focus();
  }

  render() {
    // memberitahukan ke React bahwa kita mengasosiasikan ref ke <input>
    // dengan 'textInput' kita buat di konstruktor
    <div>
      <input type="text" ref={this.textInput} />
      <input
        type="button"
        value="focus the text input"
        onClick={this.focusTextInput}
      />
    </div>;
  }
}
```

`https://codesandbox.io/s/jz0ow97kk9`

Dikode blok diatas, kita buat sebuah **tombol yang otomatis mengarahkan input focus** ketika kita klik.

Kita mulai dengan membuat sebuah instan `ref` dan mengirimkan ke `this.textInput` dimethod konstruktor dan menambahkan attribue `ref` ke field `input`.

```javascript
<input type="text" ref={this.textInput} />
```

Harap diperhatikan, ketika attribut `ref` digunakan dalam element HTML (dalam hal ini field `input`), sebuah `ref` harus dituliskan di `constructor` (dengan React.createRef()) yang menerima element DOM dengan nilai sebelumnya (`current`).

itu artinya untuk mengakses nilai DOM, kita butuh tulisan seperti ini:

```javascript
this.textInput.current;
```

Kolom input kedua, berupa tombol untuk klik agar bisa auto focus, ke inputan pertama. dengan attribue `onClick` menjalankan perintah dari fungsi `this.focusTextInput`.

```javascript
<input
  type="button"
  value="Focus the text input"
  onClick={this.focusTextInput}
/>
```

Sebuah fungsi `focusTextInput()` digunakan oleh fungsi javascript sebagai standart DOM yaitu `.focus()` untuk menfokuskan cursor ke text box inputan.

```javascript
focusTextInput() {
  this.textInput.current.focus();
}
```

Terakhir, sebuah fungsi `focusTextInput` digabungkan sebagai method konstruktor seperti ini:

```javascript
this.focusTextInput = this.focusTextInput.bind(this);
```

### Ambil Nilai dari `ref`

Dalam contoh ini, kita akan lihat bagaimana sebuah field `input` kita set ke sebuah `ref` dan dapatkan nilai dari `ref` itusendiri. Seperti contoh dibawah ini:

`https://codesandbox.io/s/j1jny2on83`

Dalam contoh itu, kita buat sebuah field `input` dimana kita bisa isi nilainya. Lalu ketika tombol submit di klik, kita akan lihat nilai dari console log.

```javascript
// Ref.js
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
  }
  handleSubmit = e => {
    e.preventDefault();

    console.log(this.textInput.current.value);
  };

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref={this.textInput} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
```

Sekali lagi, kita menggunakan fungsi `React.createRef()` untuk membuat sebuah instan ref dan melakukan pencocokan ke variabel `this.textInput`.

Di fungsi `render`, sebuah `form` terdiri dari field `input` dimana sebuah nilai kita ingin baca. **Bagaimana kita bisa baca nilainya?** ya, dengan mencocokan sebuah `ref` ke `input` dan membaca nilai dari `ref` tersebut.

```javascript
<input type="text" ref={this.textInput} />
```

Sebuah `form` sendiri terdapat fungsi `onSubmit` dari `this.handleSubmit` dimana log dari nilai akan ditampilkan diconsole.

```javascript
handleSubmit = e => {
  e.preventDefault();

  console.log(this.textInput.current.value);
};
```

> Dalam contoh, ada parameter `e` sebagai event objek. Kita menggunakan `e.preventDefault()` agar browser menerima submit dari tombol yang diklik, dan kita tidak ingin, ada aksi setelah diklik.

Dalam contoh yang [interaktif](https://codesandbox.io/s/j1jny2on83) jika kita log `this.textInput` kita akan ditampilkan sebuah objek, seperti dibawah ini:

```html
> Object {current: HTMLInputElement}
```

Perhatikan, ada satu properti `current`, dimana itu sebuah `HTMLInputElement`. itu adalah sebuah `input` element DOM sendiri dan bukan nilai aselinya. Untuk dapat nilai dari tag `input`, kita akses dengan `this.textInput.current.value` seperti dibawah ini:

```javascript
handleSubmit = e => {
  e.preventDefault();
  console.log(this.textInput.current.value);
};
```

Menggunakan `ref` cara termudah untuk mendapatkan nilai dari sebuah control form, hanya mengambil sebuah `ref` ke field input dan mengambilnya ketika kita butuh.

### Callback Refs

Sebuah **callback ref** adalah caralain dalam menggunakan ref di React. Dalam penggunaanya kita set sebuah ref properti sebagai sebuah fungsi callback. Ketika sebuah ref siap, React akan panggil fungsi tersebut, yang akan ditempelkan sebagai argumen pertama di elemen.

`https://codesandbox.io/s/xj03nxmqv4`

berikut ini contoh kode lainnya. Seperti sebelumnya, contoh dibawah ini akan mengamil nilai dari sebuah tag `input`, tapi kita gunakan refs callback ya:

```javascript
// Refs.js
class CustomTextInput extends React.Component {
    constructor(props);
    this.textInput = null;

    this.setTextInputRef = element => {
        this.textInput = element;
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.textInput.value);
    }

    render(){
        return(
            <div>
                <form onSubmit={e => this.handleSubmt(e)}>
                    <input type="text" ref={this.setTextInputRef} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
```

Dicontoh tersebut, sebuah tag `input` memiliki sebuah `ref` yang mengarah ke `this.setTextInputRef`

React akan memanggil sebuah callback `ref` dengan element DOM ketika komponen termount, dan memanggilnya dengan nilai `null` ketika diunmount. (`ref` dipanggil sebelum siklus hook `componentDidMount` dan `componentDidUpdate` melakukan callback)

### String Ref (API Turunan)

Ada banyak cara mengeset sebuah ref, tapi ini adalah sebuah turunan dan sepertinya akan dialihfungsikan. Tapi, kita liat kode orang, jadi akan kita bahas disini.

Dengan sebuah ref string, kita akan merubah tag input seperti dibawah ini:

```html
<input type="text" ref="textInput" />
```

dan kita lihat di komponen, kita mendapatkan nilai dengan `this.refs.textInput.value` tapi, sekali lagi, ini belum selesai dikode baru, karena APInya akan segera usang.

### Meneruskan Refs

Meneruskan sebuah refs merupakan teknik melempar sebuah ref ke komponen children. Sangat berguna saat ada kasus, menggunakan kembali librari komponen dan komponen paling atas (HOC).

`https://codesandbox.io/s/p5q8y5m86x`

```javascript
// Ref.js
const TextInput = React.forwardRef((props, ref) => {
  <input type="text" placeholder="Hello world" ref={ref} />;
});

const inputRef = React.createRef();

class CustomTextInput extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <TextInput ref={inputRef} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
```

meneruskan ref dapat memberikan sebuah komponen untuk mengambil alih sebuah `ref` yang diterima dan melewatkan ke sebuah komponen child.

Dicontoh diatas, kita punya sebuah komponen dengan nama `TextInput` yang mempunyai child dimana berupa filed `input`. Jadi, bagaimana kita lewatkan atau meneruskan seubah `ref` ke sebuah `input`?

Pertama, kita akan mulai dengan menuliskan sebuah `ref` dengan kode dibawah ini:

```javascript
const inputRef = React.createRef();
```

lalu, kita lewatkan sebuah `ref` ke `<TextInput ref={inputRef}>` dengan style atribute dari JSX. React akan meneruskan sebuah `ref` ke fungsi `forwardRef` sebagai argumen kedua.

selanjutnya kita meneruskan sebuah argmen ref dari bawah ke `<input ref={ref}>`. Sekarang Sebuah nilai dari node DOM dapat diakses melalui `inputRef.current`.

### Mengurutkan Komponen

Akhirnya, kita akan melihat contoh lain penggunaan ref tapi dengan teknik komponen paling atas (HOC).

`https://codesandbox.io/s/m485ox9xp9`

dicontoh tersebut, setiap kita pencet tombol, sebuah input akan tampil di console log. Sebuah input memiliki `ref` yang terhubung dan melewatkan/ meneruskan ke HOC.

```javascript
const Input = InputComponent => {
  const forwardRef = (props, ref) => {
    const onType = () => console.log(ref.current.value);
    return <InputComponent forwardRef={ref} onChange={onType} {...props} />;
  };
  return React.forwardRef(forwardRef);
};
```

Inilah yang disebut dengan HOC, dinamakan `input` dimana menerima `InputComponent` sebagai sebuah argumen. Dan juga mencata nilai dari `ref` yang tampil melalui console log setiap tombol dipencet.

Didalam `input` HOC, fungsi `forwardRef` akan mengembalikan sebuah fungsi `InputComponent` dimana terdapat fungsi `forwardRef`. Sebuah komponen `Input` akan mengembalikan nilai.

Selanjutnya, kita akan membuat sebuah komponen yang akan menjadi child dari input HOC.

```javascript
const TextInput = ({ forwarderRef, children, ...rest }) => (
  <div>
    <input ref={forwardedRef} {...rest} />
    {children}
  </div>
);
```

Sebuah komponen diatas mempunya `forwardedRef` yang siap disatukan ke `ref`, sehingga sebuah field `input` dapat diterima oleh `ref` ketika sudah dirender didalam komponen child. Sebuah perubahan `...rest` mengijinkan untuk spread sebuah props(hanya itu saja, melewatkan semua argmen di array `rest` sebagai props ke tag `input`). Jadi, bagaimana kita menggunakan komponen `TextInput`? seperti berikut ini:

```javascript
const InputField = Input(TextInput);
class CustomTextInput extends Component {
  render() {
    const inputRef = React.createRef();
    return <InputField ref={inputRef} />;
  }
}
```

Akhirnya, sebuah HOC `input` bersama dengan komponen _child_, `TextInput` sudah terset ke komponen `InputField`.

Sebuah komponen `InputField` sudah dirender dengan `ref` sekaligus.

### Kesimpulan

Refs sangat bagus untuk digunakan untuk melewatkan data ke sebuah instan child, dimana sangat berbede jika melalui props dan state.

Kamu harus berhatihati karena `refs` dapat memanipulasi DOM yang aseli, dan menggantinya sebagai virtual DOM, dimana sangat bertolak belakang dengan prinsip React. Jadi, ketika `refs` digunakan sebagai alur data dalam aplikasi jangan dijadikan methode bawaan, akan lebih hebat lagi jika digunakan hanya untuk baca data dari element DOM saja, ketika butuh saja.
