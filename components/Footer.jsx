import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>Copyright © Skyleen 2022. Tous droits réservés.</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
}

export default Footer;