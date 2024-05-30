// @ts-check
/* eslint-disable no-console */
import { program } from 'commander';


program
  .version("1.0.0")
  .description("Compares two configuration files and shows a difference.")
  .parse(process.argv);

const options = program.opts();
