/* eslint-disable no-unused-vars */

import React, { useContext } from 'react';
import { SiteContext } from '../../context';
import { style } from '../../styles';
import { HiPencil } from 'react-icons/hi';
import { VscVerifiedFilled } from 'react-icons/vsc';
import mastercard from '../../assets/mc_symbol.svg';

const CardNum = () => {
  const { inputs,  handleChange, isNumber, currentInput } = useContext(SiteContext);

  return (
    <div className='relative'>

        <div className={`${style.flexBtw} mt-4`}>
          <div>
              <label className={style.heading2}>Card Number</label>
              <p className={style.subHeading}
              >
                Enter the 16-digit card number on the card
              </p>
          </div>
          <div className={`${style.flexCenter} cursor-pointer`}>
            <HiPencil  fontSize={18} className='text-btnColor mr-2'/>
            <p className='text-btnColor'>Edit</p>
          </div>
        </div>

        <input 
          type="text" 
          className={`${style.input} w-full`}
          name='cardNum'
          value={inputs.cardNum}
          onChange={handleChange}
          maxLength={19}
        />

        { inputs.cardNum.length >= 5 
          ? <img 
              src={mastercard} 
              alt="mastercard logo" 
              className={style.mastercard} 
            /> 
          : null }

        { inputs.cardNum.length === 19 
        ? <VscVerifiedFilled 
          fontSize={17} 
          className={style.verified} /> 
        : null }

        {
          !isNumber && currentInput === inputs.cardNum 
          && (<p className={style.inputError}>Inputs must contain numbers alone!!</p>)
        }

      </div>
  )
}

export default CardNum