import { LOAD_SPENDING } from '../actions/spending';

const initialState = {
  states: {

  },
  totals: {
    cycle: {
      contribution: {
        total: {},
        top: {
          funded: []
        },
        actor: {}
      },
      expenditure: {
        total: {},
        top: {
          categories: []
        },
        actor: {}
      }
    }
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_SPENDING:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}
