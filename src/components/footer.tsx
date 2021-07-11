import ExtLink from './ext-link'
import contactStyles from '../styles/contact.module.css'
import Twitter from '../components/svgs/twitter'
const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',

    link: 'https://twitter.com/247Subaru',
  },
]
export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <span>ツイッターやってます</span>
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
