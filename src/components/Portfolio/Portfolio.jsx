import "./Portfolio.css"
import { projects } from "../../data.js"
import Project from "./Project/Project.jsx"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Portfolio({ aos }) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <section className="portfolio card" data-aos={aos}>
      <h2>Список проектов</h2>
      <h3>Двойное нажатие для перехода к проекту, свайп для просмотра</h3>
      <div>
        <Slider {...settings}>
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </Slider>
      </div>
    </section>
  )
}
