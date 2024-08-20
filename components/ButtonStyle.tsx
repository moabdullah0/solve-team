"use client";
import Link from 'next/link'
import React from 'react'
interface Props{
    title:string;
    link:string
    className:string
}
const ButtonStyle = ({title,link,className}:Props) => {
  return (
    <div>
          <Link
          href={link}
          className={className}
        >
           {title}
        </Link>
    </div>
  )
}

export default ButtonStyle