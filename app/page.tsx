"use client";

import { useState } from "react";

type FuelEconomy = {
  start: number;
  end: number;
  fuel: number;
};

export default function Home() {
  const [fuelEconomy, setFuelEconomy] = useState<FuelEconomy>({
    start: 0,
    end: 0,
    fuel: 0,
  });
  function onSubmit() {}
  return (
    <main className="container mx-auto mt-10 flex flex-col">
      <section className="container mx-auto flex flex-col gap-4">
        <div className="font-semibold">
          Calculate the fuel economy of a vehicle
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-4 items-center ">
          <div className="">
            <label htmlFor="start">Start: </label>
            <input type="text" name="start" id="start"></input>
          </div>
          <div>
            <label htmlFor="end">End: </label>
            <input type="text" name="end" id="end" />
          </div>
          <div>
            <label htmlFor="fuel">Fuel: </label>
            <input type="text" name="fuel" id="fuel" />
          </div>
          <button>Calculate</button>
        </form>
      </section>
    </main>
  );
}

// Internal components
type CalcType = {
  start: string;
  end: string;
  fuel: string;
};
function Input({}) {
  return (
    <div className="flex gap-4 ">
      <label htmlFor=""></label>
      <input type="text"></input>;
    </div>
  );
}
