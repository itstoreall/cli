import fs from 'fs';
import contactFn from './contacts.js';

console.log(
  contactFn.listContacts().then((data) =>
    console.log(
      'ind-fn1:',
      data.map((d) => d.id)
    )
  )
);

console.log(
  contactFn.getContactById(7).then((data) => console.log('ind-fn2:', data.id))
);

// contactFn.listContacts();
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
