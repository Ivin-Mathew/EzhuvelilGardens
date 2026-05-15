"use client";

import { useState } from "react";

export default function Header() {
  return (
    <div className="absolute top-3 h-20 w-screen px-8">
      <div className="flex justify-between items-center px-20 h-full w-full rounded-full bg-black text-white">
        <div>
          Logo
        </div>
        <div className="flex flex-row justify-between gap-20">
          <div>About</div>
          <div>Gallery</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  )
}
