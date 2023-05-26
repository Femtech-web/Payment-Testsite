/* eslint-disable no-unused-vars */

import React from 'react';
import { style } from '../styles';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../components/Logo';
import Timer from '../components/Timer';
import Form from '../components/Form/Form';
import Checkout from '../components/Checkout';

const PaymentPage = () => {
  return (
    <div className="container">
      <div className="left-bar">
        <div className={style.flexBtw}>
          <Logo />
          <Timer />
        </div>
        <div className="mt-8">
          <Form />
        </div>
      </div>
      <div className="right-bar">
        <Checkout />
      </div>
      <AiOutlineClose  fontSize={20} className={style.closeBar}/>
    </div>
  )
}

export default PaymentPage