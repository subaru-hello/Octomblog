import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="ホーム" />
      <div className={sharedStyles.layout}>
        <img
          src="/kankare.png"
          height="170"
          width="500"
          alt="Vercel + Notion"
        />

        <h1>オクトムーBlog</h1>
        <h2>
          「無知無欲のすすめ」（作: 老子）にハマってます。{' '}
          <ExtLink
            href="https://github.com/subaru-hello/"
            className="dotted"
            style={{ color: 'inherit' }}
          ></ExtLink>
          「天長地久」
        </h2>

        {/* <Features /> */}

        {/* <div className="explanation">
          <h3>名前の由来</h3>
          <p>
            Octopus ✖︎ Move ✖︎ Blog
            <ExtLink
              href="https://github.com/subaru-hello/"
              className="dotted"
              style={{ color: 'inherit' }}
            ></ExtLink>
          </p>
        </div> */}
      </div>
    </>
  )
}
