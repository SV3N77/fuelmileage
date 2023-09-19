"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

type FuelEconomy = {
  start: number;
  end: number;
  fuel: number;
};

export default function Home() {
  const search = useSearchParams();
  const start = search.get("Start");
  const end = search.get("End");
  const fuel = search.get("Fuel");

  const [result, setResult] = useState<Number>(0);

  const [fuelEconomy, setFuelEconomy] = useState<FuelEconomy>({
    start: start ? parseInt(start as string, 10) : 0,
    end: end ? parseInt(end as string, 10) : 0,
    fuel: fuel ? parseInt(fuel as string, 10) : 0,
  });

  const [submitted, setSubmitted] = useState<Boolean>(false);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const travelled = fuelEconomy.end - fuelEconomy.start;
    const economy = fuelEconomy.fuel / (travelled / 100);
    setResult(economy);

    setSubmitted(true);
    console.log(fuelEconomy);
    console.log(travelled);
    console.log(economy);
    console.log(result);
  }

  return (
    <main className="container mx-auto mt-10 flex flex-col">
      <section className="container mx-auto flex flex-col gap-4">
        {submitted ? (
          <div>Your fuel economy is </div>
        ) : (
          <>
            <div className="font-semibold">
              Calculate the fuel economy of a vehicle
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 items-center"
            >
              <CalcInput name={"Start"} id={"Start"} />
              <CalcInput name={"End"} id={"End"} />
              <CalcInput name={"Fuel"} id={"Fuel"} />
              <button type="submit">Calculate</button>
            </form>
          </>
        )}
      </section>
    </main>
  );
}

// Internal components

type CalcInputType = {
  name: string;
  id: string;
  // onChange: ;
};

function CalcInput({ name, id }: CalcInputType) {
  return (
    <div className="flex justify-between w-1/5">
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-bold px-3 py-2"
      >
        {name}:
      </label>
      <input
        type="text"
        id={id}
        name={id}
        className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
      />
    </div>
  );
}
