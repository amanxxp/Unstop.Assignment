import React from "react";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
const Chart = () => {
  const seats: Array<number> = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ];
  function getSeatColor(item: number): String {
    if (item == 1) {
      return "bg-green-600";
    } else {
      return "bg-red-600";
    }
  }
  function getOneCount(seats: Array<number>): number {
    let one: number = 0;
    for (let i = 0; i < seats.length; i++) {
      if (seats[i] == 1) {
        one++;
      }
    }
    return one;
  }
  return (
    <div className="m-28 mt-14 mr-40 border-1">
      <div className="text-center text-4xl font-semibold mt-4 mb-6">
        Coach A
      </div>
      <div className="flex">
        <div className="w-1/2 ml-12 flex items-center">
          <h1 className="font-semibold text-2xl">Entry</h1>
        </div>
        <div className="ml-96">
          <div className="flex ">
            <div className="rounded-sm border-2 w-[20px] h-[20px] bg-red-600 "></div>
            <h1 className="ml-2">Reserved ({getOneCount(seats)})</h1>
          </div>
          <div className="flex mt-1">
            <div className="rounded-sm border-2 w-[20px] h-[20px] bg-green-600"></div>
            <h1 className="ml-2">Unreserved ({80 - getOneCount(seats)})</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 md:gap-y-6 gap-y-4 mt-6 ml-16 mb-6">
        {seats.map((item, index) => (
          <div
            key={index}
            className={`xl:w-[80px] xl:h-[70px] md:w-[55px] md:h-[45px] w-[50px] h-[45px]  rounded-lg hover:w-[56px] hover:h-[46px] flex justify-center items-center ${getSeatColor(
              item
            )}`}
          >
            <MdAirlineSeatReclineExtra className="w-2/4 h-2/4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;