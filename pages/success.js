import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>Merci pour votre achat !</h2>
        <p className='email-msg'>Vous avez reçu une facture dans votre boîte mail.</p>
        <p className='description'>
          Si vous avez des questions, envoyez-nous un email
          <a className='email' href='mailto:contact@skyleen.fr'>
            contact@skyleen.fr
          </a>
        </p>
        <Link href='/'>
          <button type='button' width='300' className='btn'>
            Continuer vos achats
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success