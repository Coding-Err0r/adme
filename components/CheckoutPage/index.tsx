import data from "@/config/data";
import PaymentMethodCard from "./PaymentMethodCard";
import CartItem from "../CartItem";

const CheckoutPage = () => {
  return (
    <section className="w-full h-full font-poppins">
      <div className="flex flex-col items-center justify-center w-full py-12">
        <div className="w-full md:mt-2 lg:mt-4 lg:max-w-screen-xl ">
          <div className="flex flex-col items-center justify-center w-full h-full mt-[20rem]">
            <div className="flex items-center justify-center w-full px-2 md:w-1/2">
              <div className="flex items-center">
                <input
                  id="cart"
                  type="radio"
                  name="countries"
                  value="USA"
                  className="w-3 h-3 border-gray-300 md:h-4 md:w-4 focus:ring-2 focus:ring-gray-300 accent-gray-700"
                  aria-labelledby="cart"
                  aria-describedby="cart"
                />
                <label
                  htmlFor="cart"
                  className="block ml-1 text-xs font-normal text-gray-900 md:text-lg"
                >
                  Cart
                </label>
              </div>
              <hr className="flex-grow mx-2 border-t border-gray-400" />
              <div className="flex items-center">
                <input
                  id="information"
                  type="radio"
                  name="countries"
                  value="USA"
                  className="w-3 h-3 border-gray-300 md:h-4 md:w-4 focus:ring-2 focus:ring-gray-300 accent-gray-700"
                  aria-labelledby="information"
                  aria-describedby="information"
                />
                <label
                  htmlFor="information"
                  className="block ml-1 text-xs font-normal text-gray-900 md:text-lg"
                >
                  Information
                </label>
              </div>
              <hr className="flex-grow mx-2 border-t border-gray-400" />
              <div className="flex items-center">
                <input
                  id="information"
                  type="radio"
                  name="countries"
                  value="USA"
                  className="w-3 h-3 border-gray-300 md:h-4 md:w-4 focus:ring-2 focus:ring-gray-300 accent-gray-700"
                  aria-labelledby="information"
                  aria-describedby="information"
                />
                <label
                  htmlFor="information"
                  className="block ml-1 text-xs font-normal text-gray-900 md:text-lg"
                >
                  Finish
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:mt-2 lg:mt-4 lg:max-w-screen-xl ">
          <div className="flex flex-col items-center justify-center w-full h-full ">
            <div className="relative w-full h-full">
              <div className="h-full w-full bg-[#f2f2f2] bg-[radial-gradient(#bbbdbd_1px,transparent_1px)] [background-size:16px_16px] -z-20 absolute" />
              <div className="grid w-full p-4 gap-y-4 lg:gap-16 lg:grid-cols-5 lg:p-16 lg:gap-y-0 place-items-center md:p-24">
                <div className="flex flex-col w-full space-y-8 text-gray-800 lg:col-span-3 ">
                  <h1 className="text-lg font-bold md:text-3xl">
                    Complete your order
                  </h1>
                  <div className="flex flex-col space-y-4">
                    <p className="text-[#525FE1] font-bold md:text-2xl text-base">
                      Personal Details
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col space-y-2">
                        <span className="text-xs md:text-base">First Name</span>
                        <input
                          type="text"
                          className="w-full h-10 pl-2 text-xs"
                          placeholder="Enter your first name "
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <span className="text-xs md:text-base">Last Name</span>
                        <input
                          type="text"
                          className="w-full h-10 pl-2 text-xs"
                          placeholder="Enter your last name"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <span className="text-xs md:text-base">Email</span>
                        <input
                          type="text"
                          className="w-full h-10 pl-2 text-xs"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <span className="text-xs md:text-base">
                          Phone Number
                        </span>
                        <input
                          type="text"
                          className="w-full h-10 pl-2 text-xs"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <p className="text-[#525FE1] font-bold md:text-2xl text-base">
                      Payment Method
                    </p>
                    <div className="flex justify-center w-full md:justify-start">
                      <div className="grid grid-cols-2 gap-4 w-fit md:grid-cols-4">
                        {data.payments.map((payment: any, index: number) => (
                          <PaymentMethodCard
                            title={payment.title}
                            image={payment.image}
                            key={index}
                            index={index}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <p className="text-[#525FE1] font-bold md:text-2xl text-base">
                      Shipping Address
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col col-span-2 space-y-2">
                        <span className="text-xs md:text-base">
                          Address line 1
                        </span>
                        <input
                          type="text"
                          className="w-full h-10 pl-2 text-xs"
                          placeholder="Your Complete address..."
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <span className="text-xs md:text-base">City</span>
                        <input
                          type="text"
                          className="w-full h-10 pl-2 text-xs"
                          placeholder="Your city "
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <span className="text-xs md:text-base">State</span>
                        <input
                          type="text"
                          className="w-full h-10 pl-2 text-xs"
                          placeholder="Your State"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <span className="text-xs md:text-base">Landmark</span>
                        <input
                          type="text"
                          className="w-full h-10 pl-2 text-xs"
                          placeholder="Any landmark (famous place or mall)"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <span className="text-xs md:text-base">
                          Postal code
                        </span>
                        <input
                          type="text"
                          className="w-full h-10 pl-2 text-xs"
                          placeholder="ZIP Code (231216)"
                        />
                      </div>
                      <button className="w-full h-10 mt-4 text-xs border-2 border-gray-500 rounded-lg md:text-sm">
                        Cancel
                      </button>
                      <button className="w-full h-10 mt-4 text-xs text-white rounded-lg md:text-sm bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500">
                        Complete Purchase
                      </button>
                    </div>
                  </div>
                </div>
                <div className="order-first w-full px-4 py-8 h-fit lg:col-span-2 rounded-xl bg-zinc-800 lg:order-none ">
                  <div className="flex flex-col space-y-8">
                    <div className="flex flex-col space-y-2 bg-zinc-800">
                      <div className="flex items-center justify-between text-base text-white">
                        <span>Product</span>
                        <span>Subtotal</span>
                      </div>
                      <hr />
                    </div>
                    <div className="flex flex-col space-y-4 overflow-auto  max-h-[35rem] py-1">
                      <CartItem
                        title={data.cart[0].title}
                        image={data.cart[0].image}
                        price={data.cart[0].price}
                        amount={data.cart[0].amount}
                        id={data.cart[0].id}
                      />
                      <CartItem
                        title={data.cart[0].title}
                        image={data.cart[0].image}
                        price={data.cart[0].price}
                        amount={data.cart[0].amount}
                        id={data.cart[0].id}
                      />
                    </div>
                    <div className="flex flex-col py-4 space-y-1 text-base text-white border-2 rounded-md">
                      <div className="flex justify-between pl-4 pr-12">
                        <p>Subtotal</p>
                        <span>৳4498.00</span>
                      </div>
                      <hr className="mr-12" />
                      <div className="flex justify-between pl-4 pr-12">
                        <p>shipping</p>
                        <span>inside dhaka: ৳60.00</span>
                      </div>
                    </div>
                    <div className="px-4 py-2 text-base text-black bg-gray-100 rounded-md">
                      <div className="flex items-center justify-between">
                        <p>Total</p>
                        <span>৳4458.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
