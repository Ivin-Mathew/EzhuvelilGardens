import Button from "@/components/Button"
import Link from "next/link"

export default function Header() {
  return (
    <div className="sticky top-3 z-100 h-20 w-screen px-8">
      <div className="flex justify-between items-center px-20 h-full w-full rounded-full bg-black text-white">
        <Link href="/" className="font-bold">
          Ezhuvelil Gardens
        </Link>
        <div className="flex flex-row justify-between font-bold gap-20">
          <Button displayText="About" scrollTo="about" />
          <Button displayText="Gallery" scrollTo="gallery" />
          <Button displayText="Contact" scrollTo="contact" />
        </div>
      </div>
    </div>
  )
}
