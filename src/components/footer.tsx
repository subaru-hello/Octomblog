import ExtLink from './ext-link'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
export default function Footer() {
  return (
    <>
      <footer>
        <span>ツイッターやってます！</span>

        <Button
          color="primary"
          component={Link}
          to="https://twitter.com/247Subaru"
        >
          With prop forwarding
        </Button>

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
