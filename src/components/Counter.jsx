import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  useEffect(() => {
    const storedCount = localStorage.getItem("count_store");
    console.log(storedCount);
    if (storedCount) {
      console.log("count found");
      setCount((prevCount) => parseInt(storedCount));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("count_store", count);
    console.log("Counte soterd");
  }, [count]);

  return (
    <>
      <h2>You have clicked the button {count} times</h2>
      <Button variant="warning" onClick={incrementCount}>
        Increment
      </Button>
    </>
  );
}
export default Counter;
