import BillingInformation from "./BillingInformation";
import CheckoutCart from "./CheckoutCart";

const CheckoutPage = () => {
  return (
    <section className="w-full h-full font-poppins">
      <div className="flex flex-col items-center justify-center w-full py-12">
        <div className="w-full md:mt-2 lg:mt-4 lg:max-w-screen-xl ">
          <div className="flex flex-col items-center justify-center w-full h-full lg:mt-[15%] md:mt-[8%]">
            <div className="flex items-center justify-center w-full px-6 py-4 md:px-2 md:w-1/2">
              <div className="flex items-center">
                <input
                  id="cart"
                  type="radio"
                  name="countries"
                  value="USA"
                  className="w-3 h-3 border-gray-300 md:h-4 md:w-4 focus:ring-2 focus:ring-gray-300 accent-gray-700"
                  aria-labelledby="cart"
                  aria-describedby="cart"
                  disabled
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
                  checked
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
                  disabled
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
        <div className="relative flex justify-center w-full">
          <div className="h-full w-full bg-[#f2f2f2] bg-[radial-gradient(#bbbdbd_1px,transparent_1px)] [background-size:16px_16px] -z-20 absolute" />
          <div className="relative w-full md:mt-2 lg:mt-4 lg:max-w-screen-xl ">
            <div className="flex flex-col items-center justify-center w-full h-full ">
              <div className="relative w-full h-full">
                <div className="grid w-full p-4 gap-y-10 lg:gap-16 lg:grid-cols-5 lg:p-16 lg:gap-y-0 place-items-center md:p-24">
                  <BillingInformation />
                  <CheckoutCart />
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
