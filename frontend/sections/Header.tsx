

import Button from "@/components/Button"

export default function Header() {
  return (
    <div className="sticky top-3 z-100 h-20 w-screen px-8">
      <div className="flex justify-between items-center px-20 h-full w-full rounded-full bg-black text-white">
        <div>
          Logo
        </div>
        <div className="flex flex-row justify-between font-bold gap-20">
          <Button displayText="About"/>
          <Button displayText="Gallery" />
          <Button displayText="Contact" />
        </div>
      </div>
    </div>
  )
}
