import React from 'react';
import logo from './logo.svg';
import './App.scss';
import TableButtons from './components/table/TableButtons';
import PressedButtons from './components/table/PressedButtons';
import TableTaskTwo from './components/tableTaskTwo/TableTaskTwo';

const App = () => (
  <div className="App">
    <div>
      <div className="all-table">
        <div className="pressedButtons">
          <PressedButtons text="EUR" />
          <PressedButtons text="CZK" />
          <PressedButtons text="RUB" />
        </div>
        <div className="table">
          <TableButtons text="EUR" />
          <TableButtons text="PLN" />
          <TableButtons text="GEL" />
          <TableButtons text="DKK" />
          <TableButtons text="CZK" />
          <TableButtons text="GBP" />
          <TableButtons text="SEK" />
          <TableButtons text="USD" />
          <TableButtons text="RUB" />
        </div>
      </div>
    </div>
    <div className="table-second">
      <TableTaskTwo />
    </div>
  </div>
);

export default App;
