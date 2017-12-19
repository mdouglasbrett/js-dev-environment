// Generate mock data for local development
/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import fs from 'fs';
import chalk from 'chalk';
import {schema} from './mockDataSchema';

const json = JSON.stringify(jsf(schema));

fs.writeFile('./src/api/db.json', json, (err) => {
  if (err) return console.log(chalk.red(err));
  return console.log(chalk.green('Mock data generated.'));
})
