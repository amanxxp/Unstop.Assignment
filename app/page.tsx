import Chart from "@/components/Chart";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="md:ml-14 ml-64 min-[375px]:mr-14  flex items-center justify-center lg:block">
          <Chart/>
        </div>
        
      </div>
    </>
  );
}
