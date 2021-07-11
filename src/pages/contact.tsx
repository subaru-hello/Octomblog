import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
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

    link:
      'https://www.https://www.linkedin.com/in/%E4%B8%AD%E9%87%8E-%E6%98%B4-1b94b9172/',
  },
]

export default function Contact() {
  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <div className={contactStyles.avatar}>
          <img src="/avatar.png" alt="avatar with letters JJ" height={60} />
        </div>

        <h1 style={{ marginTop: 0 }}>Contact</h1>

        <div className={contactStyles.name}>
          Subaru Nakano- An Engeneering world new comer-{' '}
          <ExtLink href="https://vercel.com">Vercel</ExtLink>
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
