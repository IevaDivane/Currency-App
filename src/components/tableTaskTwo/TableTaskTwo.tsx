import React, { useState } from 'react';
import './TableTaskTwo.scss';

const currenciesArray = [
  {
    id: 1,
    selected: false,
    text: 'EUR',
  },
  {
    id: 2,
    selected: false,
    text: 'PLN',
  },
  {
    id: 3,
    selected: false,
    text: 'GEL',
  },
  {
    id: 4,
    selected: false,
    text: 'DKK',
  },
  {
    id: 5,
    selected: false,
    text: 'CZK',
  },
  {
    id: 6,
    selected: false,
    text: 'GBP',
  },
  {
    id: 7,
    selected: false,
    text: 'SEK',
  },
  {
    id: 8,
    selected: false,
    text: 'USD',
  }, {
    id: 9, // priekš key, lai man nebļaustās
    selected: false,
    text: 'RUB',
  },

];

const TableTaskTwo = () => {
  const [list, setList] = useState(currenciesArray);

  return (
    <div className="container">
      <div>
        <div className="new-task">
          {list.filter(({ selected }) => selected).map(({ text, selected, id }) => (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label className={selected ? 'showed' : 'hidden'}>
              {text.toLowerCase()}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                className="closeBtn"
                onClick={() => (
                  setList(list.map((ClickedCurrency) => (
                    ClickedCurrency.id === id ? { ...ClickedCurrency, selected: false } : ClickedCurrency
                  )))
                )}
              />
            </label>
          ))}
        </div>
      </div>
      <div className="card-label">
        {list.map(({ text, id, selected }) => (
          <div className="card-label-second" key={id}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/no-noninteractive-element-interactions */}
            <label
              onClick={() => {
                const newCurrencies = list.map((currency) => {
                  const currencyClone = { ...currency };
                  if (currency.id === id) {
                    currencyClone.selected = !currency.selected;
                  }
                  return currencyClone;
                });
                setList(newCurrencies);
              }}
            >
              <div className="checkbox">
                {selected ? 'X' : ''}
              </div>
              {text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableTaskTwo;
