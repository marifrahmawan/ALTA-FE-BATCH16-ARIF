const clothes = {
  item: "clothes",
  price: 15000,
  time: 3000,
};

const pants = {
  item: "pants",
  price: 25000,
  time: 7000,
};

const hat = {
  item: "hat",
  price: 22000,
  time: 2000,
};

const shoes = {
  item: "shoes",
  price: 46000,
  time: 10000,
};

interface ObjItem {
  item: string;
  price: number;
  time: number;
}

function buyApparel(money: number, objItem: ObjItem, callback: () => void) {
  // your code here
}
