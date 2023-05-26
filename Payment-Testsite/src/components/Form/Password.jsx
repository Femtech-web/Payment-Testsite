/* eslint-disable no-unused-vars */

import React, { useContext } from 'react';
import { SiteContext } from '../../context';
import { style } from '../../styles';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';

const Password = () => {
  const { inputs,  handleChange } = useContext(SiteContext);

  return (
    <div className={style.heading1}>
          <div className={style.label}>
            <label className={style.heading2}>Password</label>
            <p className={style.subHeading}>Enter your Dynamic password</p>
          </div>

        <input 
          type="password" 
          className={`${style.input} w-[55%]`}
          name='password'
          value={inputs.password}
          onChange={handleChange}
        />

        <BsFillGrid3X3GapFill className={style.gridIcon} fontSize={18} />

      </div>
  )
}

export default Password