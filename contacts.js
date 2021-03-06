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
    const contact = await contacts.find((contact) => {
      return contact.id === Number(contactId);
    });
    return await contact;
  } catch (error) {
    console.log(error.message);
    return;
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContacts = JSON.stringify(
      [...contacts, { id: Date.now(), name: name, email: email, phone: phone }],
      null,
      2
    );
    await fs.writeFile(contactsPath, newContacts);
    return newContacts;
  } catch (error) {
    console.log(error.message);
    return;
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const newContacts = contacts.filter((contact) => {
      return contact.id !== Number(contactId);
    });
    await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
    return newContacts;
  } catch (error) {
    console.log(error.message);
    return;
  }
}

const contactFn = { listContacts, getContactById, removeContact, addContact };
export default contactFn;
