import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="Logo" src={Logo} alt="Logo Alura" />
      </a>
      <p>
        Proudly created during the
        {' '}
        <a href="https://www.alura.com.br/">  
        Alura's React Immersion
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
