import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer>
        <span>ツイッターやってます！</span>
        <ExtLink href="https://twitter.com/247Subaru">
          <img
            src="https://vercel.com/button"
            height={46}
            width={132}
            alt="deploy to Vercel button"
          />
        </ExtLink>
        <span>
          or{' '}
          <ExtLink href="https://github.com/subaru-hello/Octomblog.git">
            僕のコード
          </ExtLink>
        </span>
      </footer>
    </>
  )
}
