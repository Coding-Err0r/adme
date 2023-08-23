
import data from '@/config/data';
import React from 'react'
import PaymentMethodCard from '../../CheckoutPage/PaymentMethodCard';

const TrackPayment = () => {
  return (
    <div className="grid items-start gap-6 text-black md:grid-cols-2">
      <div className="flex flex-col items-start space-y-1">
        <h3 className="text-lg font-medium">Payment method</h3>
        <PaymentMethodCard
          title={data.payments[3].title}
          image={data.payments[3].image}
          index={0}
        />
      </div>
      <div className="flex flex-col items-start space-y-1">
        <h3 className="text-lg font-medium">Delivery</h3>
        <p className="text-xs text-gray-500">Address</p>
        <p className="w-48 text-base text-gray-500">
          847 Jewess Bridge Apt. 174 London, UK 474-769-3919
        </p>
      </div>
    </div>
  );
}

export default TrackPayment
