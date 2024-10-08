"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const BookNow = () => {
  const [values, setValues] = useState({
    booking: 0,
  });
  const handleChange = (event: any) => {
    setValues({ ...values, [event.target.name]: Number(event.target.value) });
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(values);
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
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button type='submit' className="bg-blue-500 w-[100px] h-[50px] text-3xl text-center ml-2">
              Submit
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                {" "}
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </form>
    </div>
  );
};

export default BookNow;
