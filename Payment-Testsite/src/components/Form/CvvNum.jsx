/* eslint-disable no-unused-vars */

import React, { useContext } from 'react';
import { SiteContext } from '../../context';
import { style } from '../../styles';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';

const CvvNum = () => {
  const { inputs,  handleChange, isNumber, currentInput } = useContext(SiteContext);

  return (
    <div className={style.heading1}>

        <div className={style.label}>
          <label className={style.heading2}>CVV Number</label>
          <p className={style.subHeading}>Enter 3 or 4 digit number on the card</p>
        </div>

        <input 
          type="text" 
          className={`${style.input} w-[55%] text-center`}
          name='cvvNum' 
          value={inputs.cvvNum}
          onChange={handleChange}
          maxLength={3}
        />

        <BsFillGrid3X3GapFill className={style.gridIcon} fontSize={18} />

        {
          !isNumber && currentInput === inputs.cvvNum 
          && (<p className={style.inputError}>Inputs must contain numbers alone!!</p>)
        }

      </div>
  )
}

export default CvvNum