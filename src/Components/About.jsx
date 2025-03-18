const About = () => {
  return (
    <div className="pt-24 px-6 md:px-14">
      <section className="w-full flex flex-col md:flex-row items-center md:items-end justify-center  ">
        {/* Left Side - Image */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src="about photo.svg" // Change this to your actual image path
            alt="Mirambeena Resort"
            className="relative max-w-lg w-full h-auto object-cover rounded-tl-[300px] rounded-tr-[300px]"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 my-8 md:mt-0 text-center md:text-left md:pl-14">
          <h3
            className="text-sm text-[#000000] uppercase"
            style={{ fontFamily: "inter" }}
          >
            About Mirambeena
          </h3>
          <h2
            className="text-3xl md:text-3xl lg:text-5xl font-light leading-tight mt-2 "
            style={{ fontFamily: "Kalam, cursive" }}
          >
            RELAX IN{" "}
            <span
              className="text-orange-500 "
              style={{ fontFamily: "Kalam, cursive" }}
            >
              OUR HOTEL
            </span>{" "}
            RESORT.
          </h2>
          <p className="text-[#888888]  xl:text-xl text-[16px] mt-4 text-justify">
            “Welcome to the Motel Mirambeena - such a lovely place! Livin' it up
            at the Motel Mirambeena - and when you get here, what a nice
            surprise!”
          </p>
          <p className="text-[#888888]  xl:text-xl text-[16px] mt-4 text-justify">
            Ok, so there's no 'mirrors on the ceilings or pink champagne on ice'
            - but we do have very comfortable rooms, cold beer on ice, or a
            bottle of wine from the rack. And then there's our fabulous working
            men's meals: people come for a bed but return for our legendary
            steaks!
          </p>
          <p className="text-[#888888]  xl:text-xl text-[16px] mt-4 text-justify ">
            We specialize in short and long stays for contractors in and around
            Whyalla. Accommodation for large or small groups of working men and
            women, day shifters, night shifters. Our clients rave about us due
            to the one thing that makes us the best Whyalla motel.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
