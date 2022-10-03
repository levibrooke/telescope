import React from 'react';
import util from './util';

const SingleCard = ({ name, cycle, mouseOver, mouseLeave }) => {
  const raisedInState = cycle.raised.in_state;
  const raisedOutOfState = cycle.raised.out_of_state;

  const totalSpent = util.formatMoney(cycle.spent.total);

  return (
    <li 
      key={name} 
      className="state-card" 
      onMouseOver={mouseOver} 
      onMouseLeave={mouseLeave}
    >
      <header>
        <h3>2018 Cycle</h3>
        <h2>{name}</h2>
      </header>
      <table className="totals">
        <tbody>
          <tr>
            <td className="state__key">
              <h3>Total Raised From <span className="state__item--green">In-State</span></h3>
            </td>
            <td className="state__value--highlight-green">
              <p>
                { typeof raisedInState === 'number'
                  ? raisedInState.toLocaleString(undefined, {style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0})
                  : null
                }
              </p>
            </td>
          </tr>
          <tr>
            <td className="state__key">
              <h3>Total Raised From <span className="state__item--red">Out-Of-State</span></h3>
            </td>
            <td className="state__value--highlight-red">
              <p>
                { typeof raisedOutOfState === 'number' 
                  ? raisedOutOfState.toLocaleString(undefined, {style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0})
                  : null
                }
              </p>
            </td>
          </tr>
          <tr>
            <td className="state__key">
              <h3>Total Spent on Federal Races</h3>
            </td>
            <td className="state__value">
              <p>{totalSpent}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  );
}

export default SingleCard;