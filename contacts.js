import fs from 'fs/promises';
import path from 'path';
const contactsPath = path.join('./db/contacts.json');

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath, 'utf-8');
    return await JSON.parse(contacts);
  } catch (error) {
    console.log(error.message);
    return;
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const contact = contacts.find((contact) => {
      return contact.id === contactId;
    });
    return contact;
  } catch (error) {
    console.log(error.message);
    return;
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = JSON.stringify(
      [...contacts, { id: Date.now(), name: name, email: email, phone: phone }],
      null,
      2
    );
    await fs.writeFile(contactsPath, newContact);
    return contacts;
    // console.log('44', contacts);
  } catch (error) {
    console.log(error.message);
    return;
  }
}

// addContact('Vasya', 'f@mail.net', '0678856849');
// addContact();

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const removedContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    return fs.writeFile(contactsPath, JSON.stringify(removedContacts, null, 2));
  } catch (error) {
    console.log(error.message);
    return;
  }
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
