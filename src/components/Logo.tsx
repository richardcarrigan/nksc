import Image from 'next/image'

export default function Logo() {
  return (
    <Image
      src='/nksc_logo.png'
      width={64}
      height={64}
      alt='North Kitsap Soccer Club'
    />
  )
}