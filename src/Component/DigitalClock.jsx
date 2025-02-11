import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="">
      <div className="clock">
        <h1>{time.toLocaleTimeString()}</h1>
      </div>
    </div>
  );
};

export default DigitalClock;
