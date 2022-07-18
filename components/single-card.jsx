import React from 'react';
import util from './util';


const SingleCard = ({ name, raise, spend, mouseOver, mouseLeave }) => {
  const raisedInState = raise.in_state;
  const raisedOutOfState = raise.out_of_state;

  const hasFunded = (raise.top.funded);
  let fundedBlock = null;
  if (hasFunded) {
    const topFunded = util.formatTopFunded(raise.top.funded);

    fundedBlock = <tr>
                    <td className="state__key state__item--double-border">
                      <h3>Top Funded</h3>
                    </td>
                    <td className="state__value state__item--double-border">
                      <table className="top-funded">
                        {topFunded}
                      </table>
                    </td>
                  </tr>;
  }

  const totalSpent = util.formatMoney(spend.total);
  const supportSpend = util.formatMoney(spend.support);
  const oppositionSpend = util.formatMoney(spend.oppose);

  const hasCategories = ((spend.top.categories[0].name !== 'uncategorized')
                          && (spend.top.categories[0].amount !== 0));
  let categoryBlock = null;
  if (hasCategories) {
    const topCategories = util.formatTopCategories(spend.top.categories);

    categoryBlock = <tr>
                      <td className="state__key">
                        <h3>Top Categories</h3>
                      </td>
                      <td className="state__value">
                        <table className="top-categories">
                          {topCategories}
                        </table>
                      </td>
                    </tr>;

  }

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
          {fundedBlock}
          <tr>
            <td className="state__key">
              <h3>Total Spent on Federal Races</h3>
            </td>
            <td className="state__value">
              <p>{totalSpent}</p>
            </td>
          </tr>
          <tr>
            <td className="state__key">
              <h3>Spent in Support</h3>
            </td>
            <td className="state__value">
              <p>{supportSpend}</p>
            </td>
          </tr>
          <tr>
            <td className="state__key">
              <h3>Spent in Opposition</h3>
            </td>
            <td className="state__value">
              <p>{oppositionSpend}</p>
            </td>
          </tr>
          {categoryBlock}
        </tbody>
      </table>
    </li>
  );
}

export default SingleCard;