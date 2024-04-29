import "./Profile.css"
import SocialNetwork from "./SocialNetwork/SocialNetwork.jsx"
import { socialNetworks } from "../../data"

export default function Profile({ aos }) {
  return (
    <section className="info card" data-aos={aos}>
      <div className="content">
        <img className="me" src="/me.jpg"></img>
        <div className="text">
          <h1>Аблязов Илья Вячеславович</h1>
          <h3>ilya.ablyazov.2004@gmail.com</h3>
          <p>
            Студент второго курса{" "}
            <abbr title="Московский Технический Университет Связи и Информатики">
              МТУСИ
            </abbr>
            . Направление "Информатика и вычислительная техника"; профиль
            "Искусственный интеллект и машинное обучение". Развитие в области
            web-разработки. Стремление к изучению нового материала.
          </p>
        </div>
        <div className="socialNetworkList">
          {socialNetworks.map((socialNtw) => (
            <SocialNetwork key={socialNtw.title} {...socialNtw} />
          ))}
        </div>
      </div>
    </section>
  )
}
