import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle('settings');

  return (
    <header className='flex justify-between px-4 py-4'>
      <a href="/">
        {settings.data.site_title}
      </a>
      <nav>
        <ul className='flex'>
          {settings.data.navigation.map(({ link, label }, index) => (
            <li key={index}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
