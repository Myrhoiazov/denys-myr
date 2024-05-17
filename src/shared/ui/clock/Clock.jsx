import { useRef } from 'react';
import { useEffect, useState } from 'react';
import s from './Clock.module.scss';

const minutesEl = () => {
  return String(new Date().getMinutes()).padStart(2, '0');
};
const hoursEl = () => {
  return String(new Date().getHours()).padStart(2, '0');
};

const Clock = () => {
  const [minutes, setMinutes] = useState(() => minutesEl());
  const [hours, setHours] = useState(() => hoursEl());

  let timeRef = useRef(null);

  useEffect(() => {
    timeRef.current = setInterval(() => {
      setMinutes(minutesEl());
      setHours(hoursEl());
    }, 1000);

    return () => clearInterval(timeRef.current);
  }, []);

  return (
    <>
      <div className={s.style}>
        {hours}:{minutes}
      </div>
    </>
  );
};

export default Clock;
