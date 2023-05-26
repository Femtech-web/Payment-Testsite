/* eslint-disable no-unused-vars */

import React from 'react';
import { style } from '../styles';
import { FaWallet } from 'react-icons/fa';

const Logo = () => {
  return (
    <div className={style.flexCenter}>
        <div className={`${style.flexCenter} 
          bg-btnColor w-10 h-10 rounded-full `}
        >
          <FaWallet 
            fontSize={15} 
            className='text-white -rotate-[20deg]'
          />
        </div>
        <p className='font-semibold text-lg ml-3'>
          AceCoin
         <span className='font-thin'>Pay</span>
        </p>
    </div>
  )
}

export default Logo