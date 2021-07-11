import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer>
        <span>ツイッターやってます</span>
        {'　'}
        <ExtLink href="https://twitter.com/247Subaru">Twitter</ExtLink>
        <span>
          and{'　'}
          <ExtLink href="https://github.com/subaru-hello/Octomblog.git">
            ソースコード
          </ExtLink>
        </span>
      </footer>
    </>
  )
}
