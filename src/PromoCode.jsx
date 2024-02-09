import React, { useState } from 'react';
import './PromoCode.css'

function PromoCode() {
  const [copied, setCopied] = useState(false);
  const promoCode = 'PROMO123';

  const handleCopyClick = () => {
    navigator.clipboard.writeText(promoCode)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reseta o estado de 'copiado' após 2 segundos
      })

  };

  return (
    <div>
      <button className='botao-codigo-promocional' onClick={handleCopyClick}>
        {copied ? 'COPIADO!' : 'COPIAR PROMOCODE'}
      </button>
    </div>
  );
}

export default PromoCode;
