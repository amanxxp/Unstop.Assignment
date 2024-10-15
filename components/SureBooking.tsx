import React from "react";
interface SureBooking {
  values: {
    booking: number;
  };
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SureBooking: React.FC<SureBooking> = ({ values, setOpen }) => {
  const handleBooking = () => {

    console.log("thankyou for booking");
    setOpen(false);
  };
  return (
    <div className="flex h-[100vh] w-full justify-center items-center ">
      <div className="border-2 p-9 rounded-3xl">
        <div className="text-2xl">Are you sure you want to book</div>
        <div className="text-center text-2xl">
          {values.booking} tickets only?
        </div>
        <div className="flex justify-around mt-8">
          <button
            className="border-2 w-20 h-12 bg-red-700 rounded-md text-xl"
            onClick={() => setOpen(false)}
          >
            NO
          </button>
          <button
            className="border-2 w-20 h-12 bg-green-700 rounded-md text-xl"
            onClick={handleBooking}
          >
            YES
          </button>
        </div>
      </div>
    </div>
  );
};

export default SureBooking;
