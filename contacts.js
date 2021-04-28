import fs from 'fs/promises';
import path from 'path';
const contactsPath = path.join('./db/contacts.json');

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath, 'utf-8');
    return await JSON.parse(contacts);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => {
    return contact.id === contactId;
  });

  return contact;
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
