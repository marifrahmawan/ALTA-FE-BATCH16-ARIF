function jajanBoba(uang: number, callback: (uang: number) => void): void {
  console.log('kamu jajan boba dengan harga Rp. 5000');

  if (uang < 5000) {
    return console.log('Maaf uang kamu belum cukup untuk membeli boba\nSisa uang kamu sebesar ' + uang);
  }

  setTimeout(() => {
    console.log('sisa uang kamu Rp. ', uang - 5000);
    callback(uang - 5000);
  }, 5000);
}

function jajanSeblak(uang: number): void {
  console.log('kamu jajan seblak dengan harga Rp. 8000');

  if (uang < 8000) {
    return console.log('Maaf uang kamu belum cukup untuk membeli seblak\nSisa uang kamu sebesar ' + uang);
  }

  setTimeout(() => {
    console.log('sisa uang kamu Rp. ', uang - 8000);
  }, 9000);
}

jajanBoba(20000, jajanSeblak);
jajanBoba(10000, jajanSeblak);
