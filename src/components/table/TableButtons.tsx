import React from 'react';
import './TableButtons.scss';

type CardProp = {
    text:string,
}

const TableButtons = ({ text }: CardProp) => (
  <div className="card">

    <div className="card__button">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="label-for-check">
        {' '}
        <input type="checkbox" id="myCheck" />
        {text}
      </label>

    </div>
  </div>
);

export default TableButtons;
