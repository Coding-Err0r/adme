import data from "@/config/data";
import ReviewCard from "./ReviewCard";
import useEmblaCarousel from "embla-carousel-react";

const Review = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <section className="w-full">
      <div className="flex flex-col items-center w-full py-6">
        <div className="w-[80%] max-w-7xl">
          <div className="flex flex-col items-start ">
            <h1 className="py-4 text-2xl font-bold text-left text-gray-800 lg:text-4xl md:text-3xl">
              What Our Happy Clients Say About Us
            </h1>
          </div>
          <div className="overflow-hidden " ref={emblaRef}>
            <div className="flex px-2 py-4">
              {data.reviews.map((review: any, index: number) => (
                <div className="p-2" key={index}>
                  <ReviewCard
                    name={review.name}
                    image={review.image}
                    rating={review.rating}
                    review={review.review}
                    key={index}
                    index={index + 1}
                    designation={review.designation}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
