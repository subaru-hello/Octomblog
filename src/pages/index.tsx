import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img src="/kankare.png" height="85" width="250" alt="Vercel + Notion" />

        <h1>オクトムーBlog</h1>
        <h2>
          多分７ヶ月後にスタートアップでBackEndエンジニアになってます。{' '}
          <ExtLink
            href="https://github.com/subaru-hello/"
            className="dotted"
            style={{ color: 'inherit' }}
          ></ExtLink>
        </h2>

        {/* <Features /> */}

        <div className="explanation">
          <p>名前の由来</p>
          <h3>Octopus ✖︎ Move ✖︎ Blog</h3>
        </div>
      </div>
    </>
  )
}
