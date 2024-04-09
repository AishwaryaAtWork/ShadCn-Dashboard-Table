"use client"
import React, { useEffect, useState } from 'react'
// import { Table } from '../ui/table';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter
  } from "@/components/ui/table"  
import Loader from './Loader';

const UserList = () => {
    const [data, setData] = useState();

    useEffect(()=>{
        const fetchData = async () =>{
            let data = await fetch('https://dummyjson.com/users')
        data = await data.json();
        if(data.users){
            const d = data.users.sort((a, b) => {
                if (a.firstName < b.firstName) {
                    return -1;
                }
                if (a.firstName > b.firstName) {
                    return 1;
                }
                return 0;
            });
            setData(d)
        };
    }
    fetchData();
},[])

  return (
    <>
    {data ? (<div className='max-h-[60vh] w-[90vw] lg:w-9/12 px-4 m-6 overflow-auto border rounded'>
        <Table>
      <TableCaption>A list of fetched users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">FirstName</TableHead>
          <TableHead className="w-[150px]">LastName</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((d) => (
          <TableRow key={d.id}>
            <TableCell className="font-medium">{d.firstName}</TableCell>
            <TableCell className="font-medium">{d.lastName}</TableCell>
            <TableCell>{d.gender}</TableCell>
            <TableCell>{d.age}</TableCell>
            <TableCell>{d.email}</TableCell>
            <TableCell className="text-right text-nowrap">{d.phone}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    
    </Table>
    </div>) : <Loader />}
    </>
  )
}

export default UserList