"use client";
import Chart from "@/components/Chart";
import BookNow from "@/components/BookNow";
import Image from "next/image";
import { useState } from "react";
import SureBooking from "@/components/SureBooking";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    booking: 1,
  });
  console.log(open);
  console.log(values);
  return (
    <>
      {!open && (
        <div className="">
          <div className="md:ml-14 ml-64 min-[375px]:mr-14  flex items-center justify-center lg:block">
            <Chart />
          </div>
          <BookNow
            values={values}
            setValues={setValues}
            open={open}
            setOpen={setOpen}
          />
        </div>
      )}
      {open && <SureBooking values={values} setOpen={setOpen} />}
    </>
  );
}
