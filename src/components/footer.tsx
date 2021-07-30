import ExtLink from './ext-link'
import contactStyles from '../styles/contact.module.css'
import Twitter from '../components/svgs/twitter'
import GitHub from '../components/svgs/github'
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

    link: 'https://www.linkedin.com/in/%E4%B8%AD%E9%87%8E-%E6%98%B4-1b94b9172/',
  },
]
export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <span>SNS</span>
        </div>
        {'　'}
        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </footer>
    </>
  )
}
