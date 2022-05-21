import React from 'react';
import './PressedButtons.scss';

type CardProp = {
    text:string,
}

const PressedButtons = ({ text }: CardProp) => (
  <div className="card--pressed">
    <div className="card__button--pressed">
      <button>
        {text}
        <button id="close"> </button>
      </button>
    </div>
  </div>
);

export default PressedButtons;
