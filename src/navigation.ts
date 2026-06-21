import { getAsset, getBlogPermalink, getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Guides', href: getBlogPermalink() },
  ],
  actions: [{ text: 'Explore Guides', href: getBlogPermalink() }],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    {
      ariaLabel: 'YouTube',
      icon: 'tabler:brand-youtube',
      href: 'https://www.youtube.com/channel/UCVDdRA7kwCHtcS35BWuulSg',
    },
    {
      ariaLabel: 'WhatsApp',
      icon: 'tabler:brand-whatsapp',
      href: 'https://whatsapp.com/channel/0029ValA1ZeDOQIfjf3cfQ3w',
    },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/skorpz_limited/?hl=en',
    },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `© ${new Date().getFullYear()} Mr. Skorpz · The Entertainment Hub`,
};
