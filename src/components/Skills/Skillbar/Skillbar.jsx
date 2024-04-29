import classes from "./Skillbar.module.css"

export default function Skillbar({ name, percentage }) {
  return (
    <div className={classes.skillbar}>
      <p className={classes.name}>{name}</p>

      <div className={classes.bar}>
        <div className={classes.test}>{percentage}%</div>
        <div
          className={classes.percentage}
          style={{ width: percentage + "%" }}
        ></div>
      </div>
    </div>
  )
}
