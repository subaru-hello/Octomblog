import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'

import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',

    link: 'https://twitter.com/247Subaru',
  },
  {
    Comp: GitHub,
    alt: 'github icon',

    link: 'https://github.com/subaru-hello',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',

    link: 'https://www.linkedin.com/feed/',
  },
]

export default function Contact() {
  return (
    <>
      <Header titlePre="About" />
      <div className={sharedStyles.layout}>
        <div className={contactStyles.avatar}>
          <img src="/avatar.png" alt="avatar with letters JJ" height={60} />
        </div>

        <h1 style={{ marginTop: 0 }}>私について</h1>

        <div className={contactStyles.name}>
          Subaru Nakano{' '}
          <ExtLink href="https://twitter.com/247Subaru">-元信託銀行員-</ExtLink>
          関東インカレ110mH二部優勝2019
        </div>

        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </div>
    </>
  )
}
