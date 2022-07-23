import * as types from './types';

export const incrementTrabalho = (dispatch: (arg0: { type: string; }) => void) => {
  dispatch({ type: types.INCREMENT_TRABALHO });
};

export const decrementTrabalho = (dispatch: (arg0: { type: string; }) => void) => {
  dispatch({ type: types.DECREMENT_TRABALHO });
};

export const incrementPausa = (dispatch: (arg0: { type: string; }) => void) => {
  dispatch({ type: types.INCREMENT_PAUSA });
};

export const decrementPausa = (dispatch: (arg0: { type: string; }) => void) => {
  dispatch({ type: types.DECREMENT_PAUSA });
};

export const incrementSessao = (dispatch: (arg0: { type: string; }) => void) => {
  dispatch({ type: types.INCREMENT_SESSAO });
};

export const decrementSessao = (dispatch: (arg0: { type: string; }) => void) => {
  dispatch({ type: types.DECREMENT_SESSAO });
};
