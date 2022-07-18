export const LOAD_SPENDING = 'LOAD_SPENDING';
const payload = 'https://s3.amazonaws.com/circa-victor-payloads/telescope-2018.json';

export const getSpendingData = () => {
  return dispatch => {
    return fetch(payload, {
      mode: "cors"
    })
      .then(response => response.json())
      .then(data => {
        const type = LOAD_SPENDING;
        dispatch({
          type,
          payload: {...data}
        })
      })
      .catch(err => console.log('err', err));
  }
}
