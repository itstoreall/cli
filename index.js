import { Command } from 'commander/esm.mjs';
import functions from './contacts.js';

const program = new Command();

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      functions.listContacts().then((data) => console.table(data));
      break;

    case 'get':
      functions.getContactById(id).then((data) => console.log(data));
      break;

    case 'add':
      functions
        .addContact(name, email, phone)
        .then((data) => console.table(JSON.parse(data)));
      break;

    case 'remove':
      functions.removeContact(id).then((data) => console.table(data));
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
