import { Trash2, X } from "lucide-react";
import { Button } from "./ui/button";
import useCartStore from "@/utils/store/cart";
import { IAddBorrowBooks, createBorrowBooks } from "@/utils/api/borrow";
import { toast } from "./ui/use-toast";

const Cart = () => {
  const showCartState = useCartStore((state) => state.showCart);
  const closeCart = useCartStore((state) => state.showCartHandler);
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.deleteBook);
  const emptyCart = useCartStore((state) => state.removeCart);

  const borrowBookHandler = async () => {
    try {
      const body: IAddBorrowBooks = {
        bookId: cart.map((book) => book.id),
        borrow_date: new Date(),
      };
      const res = await createBorrowBooks(body);

      emptyCart();
      closeCart();
      toast({
        description: res?.message,
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          description: error.toString(),
        });
      }
    }
  };

  return (
    <>
      <div className="absolute right-0 top-0 z-10">
        <div
          className={`${
            showCartState ? "block" : "hidden"
          } fixed left-0 top-0 z-10 h-screen w-screen bg-slate-300/80 backdrop-blur-sm dark:bg-gray-900/80`}
          onClick={() => closeCart()}
        ></div>
      </div>

      <div className="absolute right-0 top-0 z-10">
        <div
          className={`${
            showCartState ? "" : "translate-x-full"
          } fixed right-0 top-0 z-20 h-screen w-[400px] bg-white px-5 py-5 transition-all duration-700 ease-in-out dark:bg-primary-black`}
        >
          <div className="relative h-full w-full">
            <div className="flex items-center justify-between">
              <h1 className="text-[18px] font-semibold">Your Cart</h1>
              <X className="hover:cursor-pointer" onClick={() => closeCart()} />
            </div>
            <p className="text-[12px] text-slate-500">
              Due date is 7 days after you click borrow.
            </p>
            {cart.map((book) => (
              <div
                className="mt-5 flex items-center gap-4 border-b pb-3"
                key={book.id}
              >
                <div className="h-36 w-24">
                  <img
                    src={book.cover_image}
                    alt={book.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="h-fit w-[200px]">{book.title}</p>
                <span>
                  <Trash2
                    className="stroke-secondary-red hover:cursor-pointer"
                    onClick={() => removeFromCart(book)}
                  />
                </span>
              </div>
            ))}

            <div className="absolute bottom-0 w-full">
              <Button
                className="mt-4 w-full "
                onClick={() => borrowBookHandler()}
                disabled={cart.length < 1}
                aria-disabled={cart.length < 1}
              >
                Borrow
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
