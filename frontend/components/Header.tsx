"use client";

import { useState } from "react";

export default function Header() {
  return (
    <div className="absolute top-3 h-20 w-screen px-8">
      <div className="flex justify-between items-center px-8 h-full w-full rounded-full bg-black text-white">
        <div>
          Ezhuvelil Gardens Logo
        </div>
        <div className="flex flex-row justify-between gap-20">
          <div>Menu 1</div>
          <div>Menu 2</div>
          <div>Menu 3</div>
        </div>
      </div>
    </div>
  )
}
