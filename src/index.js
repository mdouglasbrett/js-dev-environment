import numeral from 'numeral';
import './index.css';

/* eslint-disable no-console */

const courseValue = numeral(1000).format('$0,0.00');
// debugger <--- set a breakpoint for soucemap
console.log(`I would pay ${courseValue} for this awesome course!`);
