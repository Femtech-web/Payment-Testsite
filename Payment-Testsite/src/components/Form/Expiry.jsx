/* eslint-disable no-unused-vars */

import React, { useContext } from 'react';
import { SiteContext } from '../../context';
import { style } from '../../styles';

const Expiry = () => {
  const { inputs,  handleChange, isNumber, currentInput } = useContext(SiteContext);

  return (
    <div className={style.heading1}>

        <div className={style.label}>
            <label className={style.heading2}>Expiry Date</label>
            <p className={style.subHeading}>Enter the expiry date of the card</p>
        </div>

        <div className={`${style.flexEvenly} w-[55%]`}>

          <input 
            type="text" 
            className={`${style.input} w-[45%]`}
            name='expMonth'
            value={inputs.expMonth}
            onChange={handleChange}
            maxLength={2}
          />
          <span className={style.slash}>/</span>
          <input 
            type="text" 
            className={`${style.input} w-[45%]`}
            name='expYear' 
            value={inputs.expYear}
            onChange={handleChange}
            maxLength={2}
          />
  
          { !isNumber 
            && (currentInput === inputs.expMonth || currentInput === inputs.expMonth)
            && (<p className={style.inputError}>Inputs must container numbers alone!!</p>)
          }

        </div>

      </div>

  )
}

export default Expiry