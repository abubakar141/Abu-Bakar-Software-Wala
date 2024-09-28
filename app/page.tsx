"use client";
import { useRouter } from 'next/navigation'; 
import React from 'react';

const Page = () => {
  const router = useRouter(); 
  
  return (
    <div>
      <br /><br /><br /><br />
      <h1 className='text-center font-black text-7xl m-4'>GIAIC</h1>
      <p className='text-center ml-7'>GIAIC Practice Routing Props Use Effect</p>
      <center>
        <button 
          className='bg-white text-black p-4 m-4 rounded-md' 
          onClick={() => router.push('/name')} 
        >
          Name
        </button>
      </center>
    </div>
  );
}

export default Page;
