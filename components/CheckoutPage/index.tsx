import BillingInformation from "./BillingInformation";
import CheckoutCart from "./CheckoutCart";
import CheckoutHeader from "./CheckoutHeader";

const CheckoutPage = () => {
  return (
    <section className="w-full h-full font-poppins">
      <div className="flex flex-col items-center justify-center w-full py-12">
        <div className="w-full md:mt-2 lg:mt-4 lg:max-w-screen-xl ">
          <div className="flex flex-col items-center justify-center w-full h-full lg:mt-[15%] md:mt-[8%]">
            <CheckoutHeader />
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
