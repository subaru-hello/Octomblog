import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'ほーむ', page: '/' },
  { label: 'ぶろぐ', page: '/blog' },
  { label: 'あばうと', page: '/contact' },
  { label: 'ついったー', link: 'https://twitter.com/247Subaru' },
  { label: 'ぎっとはぶ', link: 'https://github.com/subaru-hello' },
]

const ogImageUrl = 'https://notion-blog.now.sh/op-image.png'

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} オクトムーblog</title>
        <meta
          name="description"
          content="An example Next.js site using Notion for the blog"
        />
        <meta name="og:title" content="オクトムー Blog" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@247subaru" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
