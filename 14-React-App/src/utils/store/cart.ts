import { create } from "zustand";
import { IBook } from "../api/books";

interface ICartState {
  showCart: boolean;
  showCartHandler: () => void;
  cart: IBook[];
  addBook: (book: IBook) => void;
  deleteBook: (book: IBook) => void;
  removeCart: () => void;
}

const useCartStore = create<ICartState>()((set) => ({
  showCart: false,
  showCartHandler: () =>
    set((state) => ({ showCart: !state.showCart })),
  cart: [],
  addBook: (book) => set((state) => ({ cart: [...state.cart, book] })),
  deleteBook: (book) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item.id !== book.id);
      return { cart: newCart };
    }),
  removeCart: () => set(() => ({ cart: [] })),
}));

export default useCartStore;
