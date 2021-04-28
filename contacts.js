import fs from 'fs';
import path from 'path';
// const contactsPath = path.join('/db', '/contacts.json');
const contactsPath = path.join('./db/contacts.json');

// TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile(contactsPath, 'utf-8', (err, data) => {
    console.log('data:', JSON.parse(data)[0]);
  });
}

function getContactById(contactId) {
  console.log('contactId', contactId);
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

const contactFn = { listContacts, getContactById, removeContact, addContact };

export default contactFn;
/* Example #1
export const info = (msg) => {
  console.log(`Info: ${msg}`);
};

export const log = (msg) => {
  console.log(`Log: ${msg}`);
};
*/
