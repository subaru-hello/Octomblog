import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img
          src="/vercel-and-notion.png"
          height="85"
          width="250"
          alt="Vercel + Notion"
        />

        <h1>オクトムーBlog</h1>
        <h2>
          多分７ヶ月後にスタートアップでBackEndエンジニアになってます。{' '}
          <ExtLink
            href="https://github.com/subaru-hello/"
            className="dotted"
            style={{ color: 'inherit' }}
          ></ExtLink>
        </h2>

        <Features />

        <div className="explanation">
          <p>名前の由来</p>
          <h3>Octopus ✖︎ Move ✖︎ Blog</h3>
          <p>
            僕小学生の時から蛸の刺身が大好き何です。あと、自分の挑戦達（move)とBlog
            をモジってオクトムーBlog と名付けました。
          </p>
        </div>
      </div>
    </>
  )
}
