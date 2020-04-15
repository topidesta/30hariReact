---
id: hari7
title: Hari Ketujuh - Siklus Hooks
sidebar_label: Hari 07 - Siklus Hooks
---

:::warning Catatan!
Hari Ke-7 ini membahas siklus React Hook _classic_, kalo pengen yang **uptodate**, silahkan kehalaman [ini](newhook).
:::

Hari ini kita akan pelajari siklus hooks yang sering digunakan dengan komponen React dan kita akan diskusikan kenapa sangat berguna ketika menggunakannya.

Selamat, kita sudah memasuki akhir pekan dalam belajar React dan kita sudah bahas dari dasar. Kita sudah menyelasaikan komponen stateful dimana digunakan untuk mencatat state komponen internal. Harini, kita berhenti mengembangkannya dan akan sedikit membicarakan tentang bagaimana sebuah aplikasi bekerja, makanya kita sebut dengan siklus hidup komponen.

Dalam sebuah aplikasi React yang besar, kita bisa menambahkan fungsi hook disetiap waktu begitu juga disetiap siklus komponen. Kita membutuhkan komponen dimana React bekerja setiap penggunaan hook. Baiklah kita pelajari pertama kali siklus hook yaitu:

## componentWillmount()/ componentDidMount()

Ketika komponen dalam suatu aplikasi terlihat, kita tidak bisa menentukan secara langsung sebuah DOM sebagimana node virtual. Daripada kita menunggu komponen itu sendiri ter-set dibrowser. Sekedar fungsi saja, kita butuh ketika sudah siap (mounted), kita bisa memanfaatkan 2 hook atau fungsi secara beda. satu dipanggil sebelum komponen terset (mounted) dihalaman dan satu lagi dipanggil setelah komponen terset (mounted).

### Apa artinya _mounting_ ?

> Ketika mendefinisikan sebuah tampilan virtual pada nodes dipohon (jejaring) DOM dengan React, sebenernya kita tidak mendifinisikan sebuah DOM secara langsung, melainkan kita sedang membangun sebuah tampilan di-dalam memori, dimana React yang bekerja dan mengatur untuk kita. Ketika membahas semuah _mounting_ kita membicarakan sebuah proses konversi sebuah komponen virtual kedalam element DOM sebenernya dimana DOM itu berada, dan dilakukan oleh React.

Hal ini bisa kita manfaatkan untuk mengambil data untuk dijabarkan di komponen. Sebagai contoh, kita ingin menampilkan aktifitas kegiatan github, sebagai contoh. Kita akan menampilkan semuanya, dan akan kita render.

Tulis kembali komponen `Isi` sebelumnya:

```javascript
class Isi extends React.Component {
  render() {
    const { activities } = this.props; // ES6 destructuring

    return (
      <div className="content">
        <div className="line" />

        {/* Timeline item */}
        {activities.map(activity => (
          <ItemAktifitas activity={activity} />
        ))}
      </div>
    );
  }
}
```

Kita akan ubah komponen `Isi` dimana kita akan gunakan API dari Github.com dan menampilkan respone ke layar. Baiklah, kita butuh yaitu mengupdate `state` objek yang tersedia.

Sebagaimana kita pelajari kemarin, kita akan mengubah suatu state ke objek di constructor dengan `this.state`.

```javascript
constructor(props){
    this.state = {
        activities:[]
    }
}
```

baiklah sekarang kita akan buat sebuah permintaan melalui protokol HTTP, ketika komponen itu sudah siap untuk munted atau setelahnya. Dengan menggunakan fungsi siklus `componentWillMount()` atau `componentDidMount()` di komponen kita, React akan menjalankan sebelum ditampilkan ke DOM. Ini sangat pas untuk menambahkan permintaan `GET`.

Kita akan ubah komponen `Isi` menggunakan permintaan API Github. Kita hanya menampilkan daftar yang kecil, baiklah kita akan tambahkan.

:::info JSON
Kita mengguna statik JSON File data Github kita gunakan untuk load data secara langsung disini (segera kita akan buat menjadi AJAX Request dalam beberapa hari kedepan) menggunakan promise. Untuk sekarang, kita fokus bagaimana mengimplementasikan komponen kita dengan sebuah data.
:::

```javascript
componentWillMount() {
    this.setState({ activities: data })
}
```

Baiklah ubah juga komponen `ItemAktifitas` yang dapat menampilkan struktur objek aktifitas. Kita gunakan `Moment.js` sebagai library memformat waktu yang mudah dibaca, misalkan `30 min ago`, tambahkan script ini.

`<script src="https://unpkg.com/moment@2.24.0/min/moment.min.js"></script>`
atau
`yarn add moment`

```javascript
import moment from "moment";

class ItemAktifitas extends Component {
  render() {
    const { activity } = this.props;
    return (
      <div key={activity.pengguna.id} className="item">
        <div className="avatar">
          <img alt={activity.text} src={activity.pengguna.avatar} /> Doug
        </div>
        <span className="time"> {moment(activity.created_at).fromNow()}</span>
        <p>{activity.text}</p>
        <div className="commentCount">{activity.komentar.length}</div>
      </div>
    );
  }
}
```

Harap diperhatikan, kita tidak merubah apapun di komponen `Isi`.

## componentWillUpdate()/ componentDidUpdate()

Terkadang kita ingin merubah suatu data dikomponen kita sebelumnya atau setelah kita benar benar melakukan render. Sebagai contoh, kita ingin memanggil fungsi sebuah render, atau sebuah fungsi dimana perlu perubahan `props` dikomponen. Seubah methode `componentWillUpdate()` dapat mengatur komponen tersebut, selama kita tidak memanggil methode `this.setState()`, karena akan terjadi looping tanpa batas.

Kita tidak akan fokus terlalu jauh, jangan kita hiraukan cara menggunakannya, tapi cukup tau sudah cukup kok. Yang akan kita pelajari lebih jauh siklus hook yaitu `componentWillReceiveProps()`.

### componentWillReceiveProps()

React akan menggunakan method ini ketika menerima sebuah `props` baru. Methode pertama yang digunakan sebuah komponen ketika menerima props baru. Mendefinisikan method ini sangat mudah untuk melihat perubahan secara detail di `props` sebagaimana kemudahan dalam mengkalkulasi dan merubah komponen state internal.
inilah waktunya kita bisa merubah state berdasarkan props yang baru.

> 1 hal yang harus diingat, meski method `componentWillReceiveProps()` dipanggil, nilai value dari `props` mungkin tidak berubah. Itu ide bagus untuk mengecek perubahan nilai value di prop.

Sebagai contoh, kita akan membuat tombol `refresh` di item aktifitas, agar pengguna dapat melakukan request ulang terhadap api github.

Kita akan gunakan `componentWillReceiveProps()` untuk menanyakan ke komponen untuk mereload data. Karena komponen kita adalah stateful. Kita akan refresh state dengan yang baru, jadi kita mudah untuk merubah sebuah props di komponen. kita akan menggunakannya untuk sekedar memberitahukan saja.

Baiklah, sekarang kita tambahkan tombol di komponen yang dapat menjalankan sebuah `requestRefresh` pada props pilihan, di kompoenen `isi`.

```javascript
class Isi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { refreshing: false };
  }
  refresh() {
    this.setState({ refreshing: true });
  }

  // callback dari komponen isi
  onComponentRefresh() {
    this.setState({ refreshing: false });
  }
  render() {
    const { refreshing } = this.state;
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header title="Github activity" />
          {/* refreshing is the component's state */}
          <Content
            onComponentRefresh={this.onComponentRefresh.bind(this)}
            requestRefresh={refreshing}
            fetchData={fetchEvents}
          />
          {/* A container for styling */}
          <Footer>
            <button onClick={this.refresh.bind(this)}>
              <i className="fa fa-refresh" />
              Refresh
            </button>
          </Footer>
        </div>
      </div>
    );
  }
}
```

:::info `<Footer />`
Harap diperhatikan, kita buat elemen baru yang menampilkan anak dari element tampilan, pola ini digunakan untuk class CSS yang sama.
:::

```javascript
class Footer extends React.Component {
  render() {
    return <div className="footer">{this.props.childer}</div>;
  }
}
```

Dengan menggunakan `prop` baru ( prop dari `requestRefresh` ), kita dapat update `activities` dari objek `state` dan nilai dapat berubah.

```javascript
class Content extends React.Component {
  constructor {
    this.state = {
      activities: [],
      loading: false // <~ set loading to false
    };
  }
  // ...
  updateData() {
    this.setState(
      {
        loading: false,
        activities: data.sort(() => 0.5 - Math.random()).slice(0, 4)
      },
      this.props.onComponentRefresh
    );
  }

  componentWillReceiveProps(nextProps) {
    // Check to see if the requestRefresh prop has changed
    if (nextProps.requestRefresh === true) {
      this.setState({ loading: true }, this.updateData);
    }
  }
  // ...
}
```

baiklah sekarang kita update `componentWillMount` dengan memanggil `this.updateData()` jangan `this.setState`.

```javascript
class Content extends React.Component {
  // ...
  componentDidMount() {
    this.updateData();
  }
  // ...
}
```

## componentWillUnmount()

Sebelum sebuah komponen sudah unmounte, React akan memanggil callback dari `componentWillUnmount()`. Ini waktu yang tepat untuk merapihkan event yang kita butuhkan, seperti membersihkan waktu selesai, data, memutus websocket dll.

Untuk ringkasnya, dengan komponen jam kita kerjakaan saat akhir waktu, kita set sebuah batasan waktu, yang akan dipanggil setiap detik. Ketika komponen siap untuk diunmount, kita pastikan kita sudah membersihkan batasan waktu, sehingga Javascript tidak akan melanjutkan batasan waktu untuk komponen yang sebenernya tidak ada.

Tulis kembali komponen `timer` yang sudah kita buat:

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getTime();
  }

  componentDidMount() {
    this.setTimer();
  }

  setTimer() {
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock() {
    this.setState(this.getTime, this.setTimer);
  }

  getTime() {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? "pm" : "am"
    };
  }

  // ...
  render() {}
}
```

Ketika jam sudah siap unmounted, kita akan bersihkan batasan waktu yang sudah dibuat di fungsi `setTimer()`. Dengan menambahkan fungsi `componentWillUnmount()` akan merapihkan semua.

```javascript
class Clock extends React.Component {
  // ...
  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }
  // ...
}
```

Itulah beberapa siklus hook yang berinteraksi di React. Kita akan sering gunakakan saat membangun aplikasi, jadi segera terbiasalah dalam penggunaannya, akan selalu ada, dan bagaimana hook masuk dalam siklus sebuah komponen.

Kita sudah perkenalkan konsep baru yang lebih menjanjikan, kita menambahkan sebuah callback dikomponen yang akan dipanggil melalui komponen child ke komponen parent.

Diseksi selanjutnya, kita akan melihat bagaimana mendefinisikan dan mendokumentasikan sebuah `prop` API dalam komponen untuk penggunaan antar komponen disebuah tim dan aplikasi secara umum.
