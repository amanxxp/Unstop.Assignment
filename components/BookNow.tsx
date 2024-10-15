"use client";
import React, { useState } from "react";
interface BookNowProps {
  values: {
    booking: number;
  };
  setValues: React.Dispatch<React.SetStateAction<{ booking: number }>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const BookNow: React.FC<BookNowProps> = ({
  values,
  setValues,
  open,
  setOpen,
}) => {
  const handleChange = (event: any) => {
    setValues({ ...values, [event.target.name]: Number(event.target.value) });
    console.log(values);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setOpen(true);
  };
  return (
    <div className="text-center mb-40">
      <form action="" onSubmit={(event) => handleSubmit(event)}>
        <div className="text-3xl">Book Now</div>
        <select
          name="booking"
          id="booking"
          className="text-black w-[100px] h-[50px] text-3xl text-center rounded-md"
          onChange={(e) => handleChange(e)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>

        <button className="bg-blue-500 w-[100px] h-[50px] text-3xl text-center ml-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookNow;
