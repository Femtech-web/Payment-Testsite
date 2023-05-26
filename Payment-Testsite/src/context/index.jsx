/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState, createContext } from "react";


export const SiteContext = createContext();

export const ContextProvider = ({children}) => {
  const [ isNumber, setIsNumber ] = useState(true);
  const [ currentInput, setCurrentInput ] = useState('');
  const [ inputs, setInputs ] = useState({
    cardNum: '',
    cvvNum: '',
    expMonth: '',
    expYear: '',
    password: ''
  });

  const handleChange = (e) => {
  const { name, value } = e.target;

    if(name === 'cardNum' ){
      const strippedCardNum = value.replace(/-/g, '')
      const formattedCardNum = strippedCardNum.match(/.{1,4}/g)?.join('-') || '';
      setCurrentInput(value);
      setIsNumber(/^[0-9-]*$/.test(value));
      setInputs((prev) => ({...prev, [name]: formattedCardNum}));
    } else{
      setCurrentInput(value);
      setIsNumber(/^[0-9]*$/.test(value));
      setInputs((prev) => ({...prev, [name]: value}));
    }

  };

  return (
      <SiteContext.Provider
          value={{inputs, setInputs, handleChange, isNumber, currentInput}}
      >
          {children}
      </SiteContext.Provider>
  )
}
