import { Trash2, X } from "lucide-react";
import { Button } from "./ui/button";

const Cart = () => {
  return (
    <>
      <div className="absolute left-0 top-0 z-10">
        <div className="fixed left-0 top-0 z-10 h-screen w-full bg-slate-300/80 backdrop-blur-sm dark:bg-primary-black/75"></div>
      </div>

      <div className="absolute left-0 top-0 z-10">
        <div className="fixed right-0 top-0 z-10 h-screen w-[400px] bg-white px-5 py-5">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-[18px] font-semibold">Your Cart</h1>
              <X className="hover:cursor-pointer" />
            </div>
            <p className="text-[12px] text-slate-500">
              Due date is 7 days after you click borrow.
            </p>
            <div className="mt-5 flex items-center gap-4 border-b pb-3">
              <div className="h-36 w-24">
                <img
                  src="http://res.cloudinary.com/hypeotesa/image/upload/v1699406709/kitchen-sink/o96epw2gdsxvm04co8gn.jpg"
                  alt="testing"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="h-fit w-[200px]">The Hobbit</p>
              <span>
                <Trash2 className="stroke-secondary-red hover:cursor-pointer" />
              </span>
            </div>

            <div className="mt-5 flex items-center gap-4 border-b pb-3">
              <div className="h-36 w-24">
                <img
                  src="http://res.cloudinary.com/hypeotesa/image/upload/v1699406709/kitchen-sink/o96epw2gdsxvm04co8gn.jpg"
                  alt="testing"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="h-fit w-[200px]">The Hobbit</p>
              <span>
                <Trash2 className="stroke-secondary-red hover:cursor-pointer" />
              </span>
            </div>
            
          </div>
          <Button className="mt-4 w-full">Borrow</Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
