import Layout from "@/components/Layout";


const Policy = () => {
  return (
    <Layout>
      <section className="w-full">
        <div className="flex flex-col items-center w-full py-12">
          <div className=" w-[80%] max-w-7xl">
            <div className="flex flex-col items-center ">
              <h1 className="py-12 text-3xl font-bold text-center text-gray-800 lg:text-6xl md:text-5xl">
                Privacy Policy
              </h1>
            </div>
            <div className="flex flex-col items-start space-y-10">
              <p className="text-sm text-left text-gray-900 lg:text-xl md:text-lg ">
                Last updated June 13, 2023
              </p>
              <p className="text-sm text-left text-gray-700 lg:text-xl md:text-lg ">
                Thank you for choosing to be part of our community at Lulu
                Systems, Inc., (“Mobilo”, “we”, “us”, or “our”). We are
                committed to protecting your personal information and your right
                to privacy. If you have any questions or concerns about our
                policy, or our practices with regards to your personal
                information, please contact us at hello@mobilocard.com. This
                Privacy Policy applies to all information collected through our
                website (at https://www.mobilocard.
              </p>
              <p className="text-sm text-left text-gray-900 lg:text-xl md:text-lg ">
                Please read this Privacy Policy carefully as it will help you
                make informed decisions about sharing your personal information
                with us.
              </p>
              <div className="flex flex-col space-y-8">
                <p className="text-sm font-bold text-left text-gray-800 lg:text-4xl md:text-lg ">
                  Table of Contents
                </p>
                <ul className="ml-6 text-sm text-gray-700 list-decimal lg:text-xl md:text-lg">
                  <li>WHAT INFORMATION DO WE COLLECT?</li>
                  <li>HOW DO WE USE YOUR INFORMATION?</li>
                  <li>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</li>
                  <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
                  <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                  <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
                  <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
                </ul>
              </div>
              <div className="flex flex-col space-y-8">
                <p className="text-sm font-bold text-left text-gray-800 lg:text-4xl md:text-lg ">
                  WHAT INFORMATION DO WE COLLECT?
                </p>
                <p className="text-sm font-semibold text-left text-gray-900 lg:text-xl md:text-lg">
                  Personal information you disclose to us
                </p>
                <p className="text-sm text-left text-gray-700 lg:text-xl md:text-lg ">
                  In Short: We collect personal information that you provide to
                  us such as name, address, contact information, and other
                  information you voluntarily provide us. We collect personal
                  information that you voluntarily provide to us (i) when you
                  sign up for the Site or Services, (ii) when you express an
                  interest in obtaining information about us or our products and
                  services, (iii) automatically as you use the Site or Services,
                  or (iv) otherwise when contacting us.
                </p>
              </div>
              <div className="flex flex-col space-y-8">
                <p className="text-sm font-bold text-left text-gray-800 lg:text-4xl md:text-lg ">
                  Information collected through our Site
                </p>
                <ul className="text-sm text-left text-gray-700 list-disc lg:text-xl md:text-lg">
                  In Short: We may collect information regarding Your Data when
                  you use our Site or Services. If you use our Site or Services,
                  we, our service providers, and our third party partners may
                  automatically log or collect information about you, your
                  computer, or mobile device, and your activity over time on the
                  Site or Services including:
                  <li className="px-4 ml-6">
                    Device Data. We, or our service providers, collect
                    information about your device such as unique device
                    identifier, media access control address, network
                    information, hardware model, browser type, screen
                    resolution, IP address, as well as usage and traffic data
                    and information about how the device interacts with the Site
                    or Services.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Policy;
