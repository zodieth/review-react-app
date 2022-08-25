import React from "react";
import style from "./reviews.module.css";

function Reviews(props) {
  let img = `./src/assets/img/${props.image}.png`;

  return (
    <div className={style.containers}>
      <div className={style.container1}>
        <img className={style.img} src={img} />

        <div className={style.description1}>
          <p className={style.name}>
            <strong>{props.name}</strong> in {props.country}
          </p>
          <p className={style.cargo}>
            {props.cargo} at <strong>{props.job}</strong>
          </p>
          <p className={style.quote}>"{props.quote}"</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
