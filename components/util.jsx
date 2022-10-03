// format money helper
const formatMoney = (value) => {
  let result;

  if (value.toFixed(0).toString().length > 9) {
     result = (Math.round(value / Math.pow(10, 8)) / 10).toFixed(1) + " Billion";
  } else if (value.toFixed(0).toString().length > 6) {
    result = (Math.round(value / Math.pow(10, 5)) / 10).toFixed(1) + " Million";
  } else {
    result = value.toLocaleString(undefined, {maximumFractionDigits: 0});
  }

  return result;
};

const formatTopCategories = (categories) => {
  return categories.map(function(category, i){
    return <tbody key={i}>
             <tr>
               <td className="name">
                 <p>{category.name}</p>
               </td>
             </tr>
           </tbody>;
  });
};

const formatTopFunded = (topFunded) => {
  return topFunded.map(function(funded, i){
    return <tbody key={i}>
             <tr>
               <td className="name">
                 <p>{funded.name}</p>
               </td>
             </tr>
           </tbody>;
  });
};


export default {
  formatMoney,
  formatTopCategories,
  formatTopFunded
};