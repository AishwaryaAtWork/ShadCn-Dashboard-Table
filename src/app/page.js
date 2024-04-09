import UserList from "@/components/myComponents/UserList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[97vh] flex-col items-center justify-center  p-24">
     <h5 className="font-bold text-xl pb-5">Next JS Task</h5>
     <p className="text-gray-400 text-xl">Users List</p>
     <UserList />
    </main>
  );
}
