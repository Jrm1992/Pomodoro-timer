import { createContext } from 'react';
import { data } from './data';

export const CounterContext = createContext<any>(data);
