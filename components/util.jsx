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
                 <p>{category.rank}. {category.name}</p>
               </td>
             </tr>
             <tr>
               <td className="amount">
                 <p>{formatMoney(category.amount)}</p>
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
                 <p>
                   {i+1}.  
                   <a target="_blank" href={"https://www.fec.gov/data/committee/" + funded.fec_id + "/?cycle=2018"}>
                     {funded.name}
                   </a>
                 </p>
               </td>
             </tr>
             <tr>
               <td className="amount">
                 <p>{funded.transactions.toLocaleString()} @ {formatMoney(funded.amount)}</p>
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