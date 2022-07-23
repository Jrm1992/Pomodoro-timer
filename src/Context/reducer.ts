import { data } from './data';
import * as types from './types';

export const reducer = (state: data, action: { type: any; }) => {
  switch (action.type) {
    case types.INCREMENT_TRABALHO: {
      return { ...state, trabalho: state.trabalho + 1 };
    }
    case types.DECREMENT_TRABALHO: {
      return { ...state, trabalho: state.trabalho - 1 };
    }
    case types.INCREMENT_PAUSA: {
      return { ...state, pausa: state.pausa + 1 };
    }
    case types.DECREMENT_PAUSA: {
      return { ...state, pausa: state.pausa - 1 };
    }
    case types.INCREMENT_SESSAO: {
      return { ...state, sessao: state.sessao + 1 };
    }
    case types.DECREMENT_SESSAO: {
      return { ...state, sessao: state.sessao - 1 };
    }
  }

  return { ...state };
};
