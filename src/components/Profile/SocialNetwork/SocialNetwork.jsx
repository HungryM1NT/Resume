import classes from "./SocialNetwork.module.css"

export default function SocialNetwork({ image, title, link }) {
  return (
    <a
      className={classes.socialNetwork}
      href={link}
      target="_blank"
      draggable="false"
    >
      <img className={classes.snImage} src={image} draggable="false"></img>
      <p>{title}</p>
    </a>
  )
}
