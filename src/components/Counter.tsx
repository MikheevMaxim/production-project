import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={classes.btn}>
      <h1>{count}</h1>
      <button className={classes.green} onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
};