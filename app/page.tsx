"use client";

import { useState } from "react";

type FuelEconomy = {
  start: number;
  end: number;
  fuel: number;
};

export default function Home() {
  const [result, setResult] = useState<string>();
  const [formData, setFormData] = useState<FuelEconomy>();
  const [metric, setMetric] = useState<string>();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const travelled = formData!.end - formData!.start;
    const economy = (formData!.fuel / (travelled / 100)).toFixed(2);
    setResult(economy);
  }

  return (
    <main className="container mx-auto mt-10 flex flex-col gap-4">
      <div className="font-semibold">
        Calculate the fuel economy of a vehicle
      </div>
      <section className="container mx-auto flex flex-col gap-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center"
        >
          <CalcInput
            name={"Start"}
            id={"start"}
            metric="Km"
            formData={formData}
            setFormData={setFormData}
          />
          <CalcInput
            name={"End"}
            id={"end"}
            metric="Km"
            formData={formData}
            setFormData={setFormData}
          />
          <CalcInput
            name={"Fuel"}
            id={"fuel"}
            metric="L"
            formData={formData}
            setFormData={setFormData}
          />
          <button
            className="bg-slate-400 px-3 py-2 rounded-md text-white"
            type="submit"
          >
            Calculate
          </button>
        </form>
        <div className="">
          {result && <div>Your fuel economy is {result}Km/L</div>}
        </div>
      </section>
    </main>
  );
}

// Internal components

type CalcInputType = {
  name: string;
  id: string;
  metric: string;
  formData: FuelEconomy | undefined;
  setFormData: (e: any) => void;
};

function CalcInput({ name, id, metric, formData, setFormData }: CalcInputType) {
  return (
    <div className="flex justify-between w-1/4">
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-bold px-3 py-2"
      >
        {name}:
      </label>
      <div className="flex  w-1/2">
        <input
          type="text"
          id={id}
          name={id}
          onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
          className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
        />
        <div className="block text-gray-700 text-sm font-bold px-3 py-2">
          {metric}
        </div>
      </div>
    </div>
  );
}
