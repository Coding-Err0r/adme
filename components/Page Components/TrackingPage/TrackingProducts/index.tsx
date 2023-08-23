import data from "@/config/data";
import React from "react";
import TrackingCard from "../TrackingCard";

const TrackingProducts = () => {
  return (
    <div className="flex flex-col space-y-4">
      {data.trackings.map((track: any, index: number) => (
        <TrackingCard
          title={track.title}
          image={track.image}
          price={track.price}
          quantity={track.amount}
          id={track.id}
          key={index}
        />
      ))}
    </div>
  );
};

export default TrackingProducts;
