"use client";
import { DataTableDemo } from "@/components/myComponents/DataTable";
import Loader from "@/components/myComponents/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch("https://dummyjson.com/users");
      data = await data.json();
      setData(data.users);
    };
    fetchData();
  }, []);
  return (
    <main className="flex min-h-[97vh] flex-col items-center justify-center  p-24">
      <h5 className="font-bold text-xl pb-5">Next JS Task</h5>
      <p className="text-gray-400 text-xl">Users List</p>
      {data ? <DataTableDemo data={data} /> : <Loader />}
    </main>
  );
}
