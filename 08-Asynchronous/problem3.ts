function lottery(num: number): Promise<string> {
  // your code here
  return new Promise<string>((resolve, reject) => {
    const lot = +(Math.random() * 100).toFixed(0);
    console.log('undian lotre dimulai...');
    console.log('sedang mengundi nomor anda...');
    
    setTimeout(() => {
      if (num === lot) {
        resolve('selamat anda mendapatkan hadiah utama berupa mobil');
      } else {
        reject('maaf anda kurang beruntung');
      }
    }, 3000);
  });
}

lottery(5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log('undian lotre telah berakhir…'));
