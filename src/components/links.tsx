import {
  IconType,
  SiFacebook,
  SiTiktok,
  SiYoutube,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const socialLinks: { icon?: IconType; label: string; href: string }[] = [
    {
      icon: SiYoutube,
      label: 'YouTube — Mooonchester',
      href: 'https://www.youtube.com/@Mooonchester',
    },
    {
      icon: SiYoutube,
      label: 'YouTube — HoriOfficial / DACY',
      href: 'https://www.youtube.com/@HoriOfficial-dacygo',
    },
    {
      icon: SiTiktok,
      label: 'TikTok — DACY Rhymer',
      href: 'https://www.tiktok.com/@dacyrhymer',
    },
    {
      icon: SiFacebook,
      label: 'Facebook — Xuân Dân',
      href: 'https://www.facebook.com/xuandanbietbay',
    },
  ]

  return (
    <div id="contact" className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      <div className="w-full">
        <h2 className="mb-4 text-xl font-heading sm:text-2xl">Contact</h2>
        <p className="mb-2">
          Email:{' '}
          <a className="underline" href="mailto:maixuandanbp2006@gmail.com">
            maixuandanbp2006@gmail.com
          </a>
        </p>
        <p className="mb-6">
          Phone:{' '}
          <a className="underline" href="tel:0354040820">
            0354040820
          </a>
        </p>
        <h2 className="mb-4 text-xl font-heading sm:text-2xl">My Social Media</h2>
        <div className="flex flex-col gap-3">
          {socialLinks.map((link, id) => {
            return (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={id}
                href={link.href}
                className="flex items-center gap-2 underline"
              >
                {link.icon && <link.icon className="h-5 w-5" title="" />}
                <span>{link.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
