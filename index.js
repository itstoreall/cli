// import fs from 'fs';
import functions from './contacts.js';
import { Command } from 'commander/esm.mjs';

const program = new Command();

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      functions.listContacts().then((data) => console.log(data));
      break;

    case 'get':
      functions.getContactById(id).then((data) => console.log(data));
      break;

    case 'add':
      functions
        .addContact(name, email, phone)
        .then((data) => console.log(data));
      break;

    case 'remove':
      functions.removeContact(id).then((data) => console.log(data));
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);

// console.log(
//   contactFn.listContacts().then((data) =>
//     console.log(
//       'ind-fn1:',
//       data.map((d) => d.id)
//     )
//   )
// );

// console.log(
//   contactFn.getContactById(7).then((data) => console.log('ind-fn2:', data.id))
// );

// console.log('ind-removeContact', contactFn.removeContact(2));

// =========================

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
