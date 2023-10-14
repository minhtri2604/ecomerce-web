/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const CountDownOTP = ({ onCountdownComplete, resetCountdown }) => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    let timer;

    if (time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      clearInterval(timer);
      if (onCountdownComplete) {
        onCountdownComplete();
      }
    }

    return () => {
      clearInterval(timer);
    };
  }, [time, onCountdownComplete]);

  useEffect(() => {
    setTime(60);
  }, [resetCountdown]);

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  return <>{formatTime(time)}s</>;
};

export default CountDownOTP;
