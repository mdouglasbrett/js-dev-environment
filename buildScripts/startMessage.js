/* eslint-disable no-console */
import chalk  from 'chalk';

process.env.NODE_ENV === 'offline'
  ? console.log(chalk.yellow('Starting app in offline mode...'))
  : console.log(chalk.green('Starting app in dev mode...'));
