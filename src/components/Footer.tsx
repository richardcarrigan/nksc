import Link from "next/link";
import Logo from "@/components/Logo";
import Bounded from "@/components/Bounded";

export default async function Footer({ settings }: any) {
  return (
    <Bounded as='footer'>
      <div className="flex sm:flex-row flex-col justify-between items-center gap-6">
        <Link href='/'>
          <Logo />
        </Link>

        <p className="text-xs">&copy;{new Date().getFullYear()} {settings.data.site_title}</p>
      </div>
    </Bounded>
  )

}