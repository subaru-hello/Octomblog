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
          <p>オクトムー Blog</p>
          <h3>僕の大好きな蛸 ✖︎ 自分の行動のログ ✖︎ ブログ</h3>
          <h3>Octopus✖︎Move✖︎Blog</h3>
          <p>
            を文字ってオクトムー Blog と名付けました。 Slowly,But Steady. Pull
            up!
          </p>
        </div>
      </div>
    </>
  )
}
