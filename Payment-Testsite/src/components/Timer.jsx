/* eslint-disable no-unused-vars */

import React from 'react';

const styles = {
  span1: 'mx-1 font-bold',
  span2: 'px-2 py-1 rounded-[0.2rem] mx-[0.1rem] bg-timerColor text-white'
};

const Timer = () => {
    const time = '01:19';

  return (
    <div>
        {time.split('').map((unit, index) => (
            index === 2 
            ? <span key={index} className={styles.span1}>{unit}</span>
            : <span key={index} className={styles.span2}>{unit}</span>
        ))}
    </div>
  )
}

export default Timer