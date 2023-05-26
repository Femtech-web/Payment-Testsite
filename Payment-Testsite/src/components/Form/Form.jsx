/* eslint-disable no-unused-vars */

import React from 'react';
import { style } from '../../styles';
import CardNum from './CardNum';
import CvvNum from './CvvNum';
import Expiry from './Expiry';
import Password from './Password';

const Form = () => {

  return (
    <form>
      <CardNum />
      <CvvNum />
      <Expiry />
      <Password />
      <button className={style.submitBtn} type='button'>Pay Now</button>
    </form>
  )
}

export default Form