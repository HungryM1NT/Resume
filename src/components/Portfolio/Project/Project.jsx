import classes from "./Project.module.css"

export default function Project({ image, title, description, link }) {
  return (
    <div onDoubleClick={() => (window.location.href = link)}>
      <img src={image} className={classes.image}></img>
      <div>
        <p className={classes.title}>{title}</p>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  )
}
