/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from 'react';
import { style } from '../styles'
import { AiFillApple } from 'react-icons/ai';
import { FaToiletPaper } from 'react-icons/fa';
import Atm from './Atm';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

 const itemDetails = [
    {
      title: 'Order Number',
      subtitle: '1266201'
    },
    {
      title: 'Product',
      subtitle: 'MackBook Air'
    },
    {
      title: 'VAT(20%)',
      subtitle: '$100.00'
    }
 ];

const Checkout = () => {
  return (
    <div className={`${style.flexBtw} ${style.checkoutContainer}`}>

      <div className='absolute z-50'>
        <Atm />
      </div>

      <div className={`${style.checkout} checkout`}>
        <div className='mt-[40%] p-6'>
          <div className={style.detailsContainer}>
            <p className={style.detailText}>Company</p>
            <div className={`${style.flexEvenly} ${style.heading2}`}>
              <span className={`${style.flexCenter} ${style.apple}`}>
                <AiFillApple fontSize={15} className='text-white'/>
              </span> 
              Apple
            </div>
          </div>
          {itemDetails.map((item, index) => (
            <div className={style.detailsContainer} key={index}>
            <p className={style.detailText} key={index}>{item.title}</p>
            <p className={style.subDetail} key={index}>{item.subtitle}</p>
          </div>
          ))}
        </div>

        <div className='separator'></div>

        <div className={`${style.flexBtw} px-6 py-2`}>
          <div className={style.payment}>
            <p className={style.pay}>You have to Pay</p>
            <p className="font-semibold">
              549
              <span className={style.money1}>.99</span> 
              <span className={style.money2}>USD</span>
            </p>
          </div>
          <FaToiletPaper fontSize={18}/>
        </div>
      </div>

    </div>
  )
}

export default Checkout;