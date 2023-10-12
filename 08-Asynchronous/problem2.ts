const clothes = {
  item: 'clothes',
  price: 15000,
  time: 3000,
};

const pants = {
  item: 'pants',
  price: 25000,
  time: 7000,
};

const hat = {
  item: 'hat',
  price: 22000,
  time: 2000,
};

const shoes = {
  item: 'shoes',
  price: 46000,
  time: 10000,
};

interface ObjItem {
  item: string;
  price: number;
  time: number;
}

function buyApparel(money: number, objItem: ObjItem, callback: () => void) {
  console.log('saya membawa uang sebesar Rp. ', money);
  console.log(`saya ingin membeli ${objItem.item}`);
  console.log(`dengan harga Rp. ${objItem.price}`);
  console.log(`dan waktu yang dibutuhkan adalah ${objItem.time / 1000} detik`);
  setTimeout(() => {
    callback();
  }, objItem.time);
}

const money = 150000;

buyApparel(money, clothes, () => {
  let remainingMoney = money - clothes.price;
  buyApparel(remainingMoney, pants, () => {
    remainingMoney -= pants.price;
    buyApparel(remainingMoney, hat, () => {
      remainingMoney -= hat.price;
      buyApparel(remainingMoney, shoes, () => {
        remainingMoney -= shoes.price;
        console.log('sisa kembaliannya adalah ', remainingMoney);
      });
    });
  });
});
