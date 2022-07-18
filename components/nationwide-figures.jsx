import React from 'react';
import propTypes from 'prop-types';

const NationwideFigures = ({ data }) => {
  const totalRaised = data.totals.cycle.contribution.total.amount;
  const totalSpent = data.totals.cycle.expenditure.total.amount;
  const uniqueDonors = data.totals.cycle.contribution.actor.individuals;
  const uniqueVendors = data.totals.cycle.expenditure.actor.organizations;

  return (
    <section className="nationwide-figures">
      <h3>2018 Cycle</h3>
      <h2>Nationwide <span>Figures</span></h2>
      <table className="figures">
        <tbody>
          <tr>
            <td className="nationwide__key">
              <h3>Total Raised</h3>
            </td>
            <td className="nationwide__value">   
              <p>
                { typeof totalRaised === 'number'
                  ? totalRaised.toLocaleString(undefined, {style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0})
                  : null
                }
              </p>
            </td>
          </tr>
          <tr>
            <td className="nationwide__key figures__item--double-border">
              <h3>Total Spent</h3>
            </td>
            <td className="nationwide__value figures__item--double-border">
              <p>
                { typeof totalSpent === 'number'
                  ? totalSpent.toLocaleString(undefined, {style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0})
                  : null
                }
              </p>
            </td>
          </tr>
          <tr>
            <td className="nationwide__key">
              <h3>Unique Donors</h3>
            </td>
            <td className="nationwide__value">
              <p>
                { typeof uniqueDonors === 'number'
                  ? (Math.round(uniqueDonors / Math.pow(10, 5)) / 10).toFixed(1) + ' Million'
                  : uniqueDonors
                }
              </p>
            </td>
          </tr>
          <tr>
            <td className="nationwide__key">
              <h3>Unique Vendors</h3>
            </td>
            <td className="nationwide__value">
              <p>
                { typeof uniqueVendors === 'number'
                  ? uniqueVendors.toLocaleString(undefined, {maximumFractionDigits: 0})
                  : null
                }
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
};

NationwideFigures.propTypes = {
  data: propTypes.object.isRequired
};

export default NationwideFigures;
