import "./Skills.css"
import Skillbar from "./Skillbar/Skillbar"
import { frontend, otherSkills } from "../../data"

export default function Skills() {
  function getSkills(skills) {
    return skills.map((skill) => (
      <Skillbar
        key={skill.name}
        name={skill.name}
        percentage={skill.percentage}
      />
    ))
  }

  return (
    <section className="skillSection">
      <div className="frontend card" data-aos="fade-right">
        <h2>Frontend навыки</h2>
        {getSkills(frontend)}
      </div>
      <div className="other card" data-aos="fade-left">
        <h2>Прочие навыки</h2>
        {getSkills(otherSkills)}
      </div>
    </section>
  )
}
