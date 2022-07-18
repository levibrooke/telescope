import React from 'react';
import propTypes from 'prop-types';
import util from './util';

const NationwideActivity = ({ data }) => {

  const topFunded = util.formatTopFunded(data.totals.cycle.contribution.top.funded);
  const topCategories = util.formatTopCategories(data.totals.cycle.expenditure.top.categories);

  return (
    <section className="nationwide-activity">
      <h3>2018 Cycle</h3>
      <h2>Nationwide <span>Activity</span></h2>
      <table className="activity">
        <tbody>
          <tr>
            <td className="nationwide__key">
              <h3>Top 3 Funded Entities</h3>
            </td>
            <td className="nationwide__value">
              <table className="top-funded">
                {topFunded}
              </table>
            </td>
          </tr>
          <tr>
            <td className="nationwide__key">
              <h3>Top 3 Categories</h3>
            </td>
            <td className="nationwide__value">
              <table className="top-categories">
                {topCategories}
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

NationwideActivity.propTypes = {
  data: propTypes.object.isRequired
};

export default NationwideActivity;