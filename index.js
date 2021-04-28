import fs from 'fs';
import contactFn from './contacts.js';

console.log('index-listContacts', contactFn.listContacts());
console.log('index-getContactById', contactFn.getContactById());
// import path from 'path';
// const contactsPath = path.join('/db', '/contacts.json');
// console.log('contactsPath', contactsPath);

// import { Command } from 'commander/esm.mjs';
// const program = new Command();

// program
//   .option('-d, --debug', 'output extra debugging')
//   .option('-s, --small', 'small pizza size')
//   .option('-p, --pizza-type <type>', 'flavour of pizza');

/* Example #1
import { info, log } from './contacts.js';

info('info function');
log('log function');
*/
